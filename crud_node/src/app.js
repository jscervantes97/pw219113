const express = require('express');
const path = require('path');
const app = express();
const mysql = require('mysql');
const myConnection = require('express-myconnection');
//Importamos las rutas 
const indiceRutas = require('./rutas/index');

//CONFIGURACIONES 
app.set('port',process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));

//middleware
app.use(myConnection(mysql,{
	host: 'localhost',
	user: 'root',
	password: '',
	port: 3306,
	database: 'crudnodejsmysql13'
},'single'));

//Usar Rutas
app.use("/",indiceRutas)

//Servidor que este escuchando 
app.listen(app.get('port'),()=>{
	console.log("Servidor escuchando en el puerto 3000");
});