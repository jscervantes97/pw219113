const express = require('express');
const rutas = express.Router();

rutas.get("/",(req,res) => {
	res.send("<marquee>hola mundo pero en node jajajaja </marquee>");
});

module.exports = rutas;