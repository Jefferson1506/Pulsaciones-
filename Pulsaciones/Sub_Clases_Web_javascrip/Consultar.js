


function main(){

    verPersonas();

}


function verPersonas(){
    
    
    var datos = [];


    if(JSON.parse(localStorage.getItem('dato')) !=null){
        datos = JSON.parse(localStorage.getItem('dato'));
    }

    var aux =" ";

    datos.forEach(element => {
      
      aux += "<tr>"
      aux += "<td>" +  element.cedula + "</td>"
      aux += "<td>" +  element.nombre + "</td>"
      aux += "<td>" +  element.sexo   + "</td>"
      aux += "<td>" +  element.edad   + "</td>"
      aux += "<td>" +  element.pulsaciones + "</td>"
      aux += "</tr>"
  
    });


    document.getElementById("detalle2").innerHTML = aux;

}