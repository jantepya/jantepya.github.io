import { Carousel3D } from '../Carousel3D/src/Carousel3D.module.js';


var tileElements = [];

var currentSelection = 5;

{
  var first = document.createElement( 'img' );
  first.className = "tileImg";
  first.src = "./img/jon-dark.jpg";
  tileElements.push(first);
}

for (var i = 0; i < 4; i++) {
  var img = document.createElement( 'img' );
  img.className = "tileImg";
  img.src = "./img/" + i + ".jpg";
  tileElements.push(img);
}

{
  // var last = document.createElement( 'div' );
  // last.innerHTML = '<i class="fa fa-question-circle" aria-hidden="true"></i>';
  // last.className = 'question-icon';
  // tileElements.push(last);
  var first = document.createElement( 'img' );
  first.className = "tileImg";
  first.src = "./img/tbd.png";
  tileElements.push(first);
}

var car = new Carousel3D();
car.tileMargin = 35;
car.containerName = "carousel";
car.tileElements = tileElements;
car.planeHeight = -118;
car.textSelectable = false;
car.tileSize = { "w": 400, "h": 300 };
car.cameraZoom = -1100;

car.onSelectionChange = function ( i ) {
  $( "#content-" + currentSelection ).hide();
  $( "#content-" + i ).show();
  currentSelection = i;
}

car.onStart = function ( i ) {
  currentSelection = i;
  $( "#content-" + i ).show();
}

car.init();

car.rotateTo(0);
