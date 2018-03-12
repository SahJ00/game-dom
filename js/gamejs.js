var player = function () {
  name = prompt('Introduce un nombre: ');
  while (name < 1) {
    name = prompt('Para comenzar la historia hay que introduce un nombre: ');
  }
  alert('Recueda que puedes interactuar con las imagenes usando el raton.');
  return name;
}

var chapterOne = function (name) {
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
}

var light = function () {
  ansLight = confirm('¿Quieres encender la luz?');
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
      '<section class="row justify-content-md-center id="eventKey">' +
      '<section class="col-md-2 p-0 m-0 mr-1"><img class="img-fluid key" id="keyOn" src="img/key.png" alt="key"></section>' +
      '<section class="col-md-4 p-0 m-0" mr-1 ml-1><img class="img-fluid paper" id="paperOn" src="img/paper.png" alt="paper"></section>' +
      '<section class="col-md-2 p-0 m-0 ml-0 ml-1"><img class="img-fluid pencil" id="pencilOn" src="img/pencil.png" alt="pencil"></section>' +
      '</section>';

    var keyON = document.getElementById("keyOn").addEventListener("click", key);
    var paperON = document.getElementById("paperOn").addEventListener("click", paper);
    var pencilON = document.getElementById("pencilOn").addEventListener("click", pencil);
  } else {
    while (ansLight === false) {
      alert('La habitacion esta muy oscura, llegas a la puerta pero esta cerrada, para encontrar la llave seria mejor encender la luz.');
      light();
    }
  }
}

var key = function () {
  ansKey = confirm('¿Quieres coger la llave?');
  if (ansKey === true) {
    var objetiveTwo = document.getElementById("ob2");
    objetiveTwo.classList.add("objetivesCompleted");
    var chapterOneLight = document.getElementById("eventLight");
    chapterOneLight.classList.remove("justify-content-md-center");
    chapterOneLight.classList.remove("row");
    chapterOneLight.innerHTML = '';
    var item = document.getElementById('items');
    item.innerHTML = '<section class="row justify-content-md-center">' +
    '<section class="col-md">' +
    '<h2>Objetos: </h2>' +
    '</section>' +
    '<section class="col-md-2 p-0 m-0 mr-1"><img class="img-fluid key" src="img/key.png" alt="key"></section>'+
    '</section>';
    var chapterOneLight = document.getElementById("eventLight").innerHTML = '<p>Con la llave en las manos corres hacia la puerta para abrirla.</p>' +
    '<section class="row justify-content-md-center">' +
    '<section class="col-md-2 p-0 m-0 ml-0 ml-1"><img class="img-fluid pencil" id="doorOn" src="img/door.png" alt="door"></section>' +
    '</section>';
    var doorON = document.getElementById("doorOn").addEventListener("click", door);
  } else {
    alert('Hay que elegir un objeto de la mesa.');
  }
}

var paper = function () {
  ansPaper = confirm('¿Quieres coger el papel?');
  if (ansPaper === true) {
    alert('El papel no nos ayudará a abrir la puerta.')
  } else {
    alert('Hay que elegir un objeto de la mesa.');
  }
}

var pencil = function () {
  andPencil = confirm('¿Quieres coger el lapiz?');
  if (andPencil === true) {
    alert('El lapiz no nos ayudará a abrir la puerta')
  } else {
    alert('Hay que elegir un objeto de la mesa.');
  }
}

var door = function () {
  andDoor =  confirm('¿Quieres abrir la puerta?');
  if (andDoor === true) {
    alert('Felicidades completaste el nivel!!')
    var item = document.getElementById('items');
    item.innerHTML = '';
    var objetiveTwo = document.getElementById("ob3");
    objetiveTwo.classList.add("objetivesCompleted");
    var chapterOneLight = document.getElementById("eventLight");
    chapterOneLight.classList.add("justify-content-md-center");
    chapterOneLight.classList.add("row");
    chapterOneLight.innerHTML = '';
    var chapterOneLight = document.getElementById("eventLight").innerHTML = '<h1> F I N </h1>';

  } else {
    alert('Para acabar el nivel tienes que abrir la puerta');
  }
}

player();
chapterOne(name);