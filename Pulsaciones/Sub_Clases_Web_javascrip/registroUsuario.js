var cedulaRegistro
var nombreRegistro;
var sexoRegistro;
var edadRegistro;
var resultadoPulsaciones ;




function accion(){
    
    var accion = document.getElementById("sexo").value;
    

    switch (accion) {
        case "Seleccione":  window.alert('No ha selecionado el sexo ');
            break;
    
        default: document.getElementById("correcion4").value=calcularPulsaciones(),agregarPersonas();
            break;
    }


    
}


function calcularPulsaciones(){
    sexoRegistro   = document.getElementById("sexo").value;
    edadRegistro   = document.getElementById("edad").value;
      resultadoPulsaciones;
    switch(sexoRegistro){
       case "Masculino" : resultadoPulsaciones=(210 - parseInt(edadRegistro)) /10
            break

        case "Femenino" : resultadoPulsaciones=(220 - parseInt(edadRegistro )) /10
            break
    }

    //
    //

    return resultadoPulsaciones;
}


function agregarPersonas(){
    
    cedulaRegistro =document.getElementById("cedula").value;
    nombreRegistro =document.getElementById("nombre").value;;
    sexoRegistro   = document.getElementById("sexo").value;
    edadRegistro   = document.getElementById("edad").value;
    resultadoPulsaciones = calcularPulsaciones();


  var datosNew = {"cedula":cedulaRegistro,"nombre":nombreRegistro,"sexo":sexoRegistro,"edad":edadRegistro,"pulsaciones": resultadoPulsaciones }
  var datos =[];

  if(JSON.parse(localStorage.getItem('dato')) !=null){
      datos = JSON.parse(localStorage.getItem('dato'));
  }

  datos.push(datosNew);
  localStorage.setItem('dato',JSON.stringify(datos));


}


