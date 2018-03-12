var player = function () {
  name = prompt('Introduce un nombre: ');
  while (name < 1) {
    name = prompt('Para comenzar la historia hay que introduce un nombre: ');
  }
  alert('Recueda que puedes interactuar con las imagenes usando el raton.');
  return name;
}



function chapterOne(name, ansLight, chapterOneLight) {
  /*
  // esta es una forma
  var h1 = document.createElement('h1');
  var title = document.createTextNode('Capitulo 1: El despertar de ' + name + ' en la noche.');
  h1.appendChild(title);
  document.getElementById('history').appendChild(h1);
  
  var p = document.createElement('p');
  var textBedroom1 = document.createTextNode('Te levanta por la noche por los ruidos que hace el viento y los truenos...');
  p.appendChild(textBedroom1);
  document.getElementById('history').appendChild(p);
  
  var p = document.createElement('p');
  var textBedroom2 = document.createTextNode(' En tu habitacion esta todo oscuro, pero cada vez que salta un trueno la habitacion se ilumina.');
  p.appendChild(textBedroom2);
  document.getElementById('history').appendChild(p);
  */

  // esta es otra forma de hacerlo.
  // shows the objectives of the game
  var chapterOneText = document.getElementById('history');
  var objetives = document.getElementById('advice');
  objetives.innerHTML = '<section class="row">' +
    '<section class="col-md">' +
    '<h2>Objetivos: </h2>' +
    '</section>' +
    '<section class="col-md"  id="ob1">' +
    '<p>- Encender la luz.</p>' +
    '</section>' +
    '<section class="col-md">' +
    '<p id="ob2">- Encontra la llave.</p>' +
    '</section>' +
    '<section class="col-md">' +
    '<p id="ob3">- Abrir la puerta.</p>' +
    '</section>' +
    '</section>';

  // Chapter One

  chapterOneText.innerHTML = '<h1>Capitulo 1: El despertar de ' + name + ' en la noche.</h1>' +
    '<p>Te levanta por la noche por los ruidos que hace el viento y los truenos...</p>' +
    '<p>En tu habitacion esta todo oscuro, pero cada vez que salta un trueno la habitacion se ilumina.</p>' +
    '<section class="col-md-12 "><img class="img-fluid bedroom mb-0 pb-0" src="img/bedroom.jpg" alt="beedroom"></section>' +
    '<section class="row justify-content-md-center" id="eventLight">' +
    '<section class="col-md-10 p-0 m-0 mr-1"><h2>Pulsa la imagen para encender la luz</h2></section>' +
    '<section class="col-md-3 p-0 m-0 mr-1" id="lightOn"><img class="img-fluid light"  src="img/light.png" alt="light"></section>' +
    '</section>';


  var lightOn = document.getElementById("lightOn").addEventListener("click", light);

  if (ansLight === true) {
    var objetiveOne = document.getElementById("ob1");
    objetiveOne.classList.add("objetivesCompleted");
    var chapterOneLight = document.getElementById("eventLight");
    chapterOneLight.classList.remove("justify-content-md-center");
    chapterOneLight.classList.remove("row");
    chapterOneLight.innerHTML = '';
    var chapterOneLight = document.getElementById("eventLight").innerHTML = '<p>Enciendes la luz y intentas abrir la puerta, pero la puerta esta cerrada, tendrias que  buscar la llave.</p>' +
    '<p>Te giras y te diriges a tu escritorio para buscarla.</p>' +
    '<p>Tras pasar un rato buscando en tu escritorio encontraste estas cosas: </p>' +
    '<section class="row justify-content-md-center">' +
    '<section class="col-md-2 p-0 m-0 mr-1"><img class="img-fluid key" src="img/key.png" alt="key" onclick="myfunction()"></section>' +
    '<section class="col-md-4 p-0 m-0" mr-1 ml-1><img class="img-fluid paper" src="img/paper.png" alt="paper" onclick="myfunction()"></section>' +
    '<section class="col-md-2 p-0 m-0 ml-0 ml-1"><img class="img-fluid pencil" src="img/pencil.png" alt="pencil" onclick="myfunction()"></section>' +
    '</section>';
  } else {
    while (ansLight === false) {
      alert('La habitacion esta muy oscura, llegas a la puerta pero esta cerrada, para encontrar la llave seria mejor encender la luz.');
      light();
    }
  }

  if (ansLight === true) {
    
  }
}

var light = function () {
  ansLight = confirm('¿Quieres encender la luz?');

  return ansLight;
}



/*
function door() {
  confirm('¿Quieres encender la luz y abrir tu puerta?');
  return ;
}*/



player();
chapterOne(name);



