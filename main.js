const listaDeTeclas = document.querySelectorAll('input[type=button]');
const inputTel = document.querySelector('input[type=tel]');

for (let indice = 0; indice < listaDeTeclas.length; indice++) {
  
  const tecla = listaDeTeclas[indice];
  
  tecla.onclick = function () {
    inputTel.value = inputTel.value + tecla.value;
  }
}




//document.addEventListener('DOMContentLoaded', function() {
 // const botones = document.querySelectorAll('button');
 // console.log(botones);
//});



//document.addEventListener('DOMContentLoaded', function() {
//  const teclas = document.querySelectorAll('.teclado input[type="button"]');
//  teclas.forEach(tecla => {
//    tecla.addEventListener('click', function() {
//      console.log(tecla.value);
//    });
//  });
//});


//En este código, utilizamos document.querySelectorAll('.teclado input[type="button"]') para seleccionar todos los botones dentro del elemento con la clase "teclado". Luego, utilizamos forEach para recorrer cada tecla y asignar un evento de clic a cada una. Cuando se hace clic en una tecla, se muestra su valor en la consola con console.log(tecla.value).
//document.addEventListener('DOMContentLoaded', function() {
//  const teclas = document.querySelectorAll('.teclado input[type="button"]');
//  teclas.forEach(tecla => {
//    tecla.onclick = function() {
//      console.log(tecla.value);
//    };
//  });
//});


//En este código, utilizamos un bucle for para recorrer cada tecla y asignar un evento de clic a cada una. Cuando se hace clic en una tecla, se muestra su valor en la consola con console.log(teclas[i].value).
// document.addEventListener('DOMContentLoaded', function() {
//  const teclas = document.querySelectorAll('.teclado input[type="button"]');
//  for (let i = 0; i < teclas.length; i++) {
//    teclas[i].addEventListener('click', function() {
//      console.log(teclas[i].value);
//    });
//  }
// });


















   /*
    
    var button = document.getElementById(«button»);
var valorbutton = button.value;
input = document.querySelector('placeholder'), 

/*----------------------------------------------------------------

// Imprimira en el panel los colores
function setPrintDisplayColorsDashboard(data, i) {
    if(urlPath === '/') {
      $('#tbodyListColorsDashBoard')
        .append(`<div id="cdb-${data.id}" class="col s4 colorDashboar" style="background-color: ${data.color};" onclick="setColorSelectDashboard('${data.id}')">
        <input type="radio" id="dbProd-${data.id}" name="selectProductDB" />
        <label for="dbProd-${data.id}"></label>
      </div>`);
    }
  }
  
  // Cambiara la seleccion de radio color
  function setColorSelectDashboard(data){
    console.log('Se ha seleccionado el color '+ data);
    $(`#dbProd-${data}`).prop('checked', 'true');
  }
   
  function setNumbersSelectDashboard(data){
    console.log('Se ha seleccionado el Numero '+ data);
    var inp = $('input[name=NumberLote]');
    if(data === "Clear") {
      console.log('Limpiar')
      inp.val('');
    } 
    if(data !== 'none') {
      var ant = inp.val();
      var newN = data;
      inp.val(`${ant}${newN}`);
      console.log(data +' '+n)
    }
  }


/*
// Cuando el DOM esté cargado
window.onload = function() {
    buttons = document.querySelectorAll('.teclado');
    buttonsAct(true);
}

*/

/*
    // Función para activar / desactivar botones
function buttonsAct(status) {
    buttons.forEach(function(item) {
        item.disabled = status;
    });
}
*/

/*

//aqui tomo el valor de cada tecla pulsada.
function numero(btn){
    var number=btn.value;
    document.getElementById('value').innerHTML+=" "+numero;
    return true;
}
