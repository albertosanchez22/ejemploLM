function loadLDocA(fichero,tipo)
{
    let http = new XMLHttpRequest(); //Se crea petición al servidor
    if ("withCredentials" in http) {
        alert("Cors habilitado")
    }
    http.open("GET",fichero,true); //Se pide procesar el fichero. Continua la ejecución hasta recibir la respuesta
    http.setRequestHeader("Content-type", "text/xml");
   // http.setRequestHeader('Access-Control-Allow-Origin', '*');
    http.send();
    http.addEventListener('load', (event) => {  //Cuando se reciba la respuesta, se ejecuta esta función
        if(http.status === 200) {
            if(tipo == "xml")
            {
                gestionarFicheroXML(http.responseXML)
            }
            else
			    gestionarFicheroTXT(http.responseText)
		}})
}
