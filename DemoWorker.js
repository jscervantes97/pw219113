var i = 0 ; 
function cuenta(){
	i = i + 1 ; 
	//envia respuesta al workjer que lo mando a llamar 
	postMessage(i);
	//Ejecutamos cuenta() cada 500 milisegundos 
	setTimeout("cuenta()",500);
}
cuenta();