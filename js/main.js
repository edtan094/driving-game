document.addEventListener('keydown', rotateCar);
document.addEventListener('keydown', moveCar);
var $car = document.querySelector('img');

function rotateCar(event) {
  if (event.key === 'w') {
    $car.setAttribute('class', 'north');
  } else if (event.key === 'a') {
    $car.setAttribute('class', 'west');
  } else if (event.key === 's') {
    $car.setAttribute('class', 'south');
  } else if (event.key === 'd') {
    $car.setAttribute('class', 'east');
  }
}
function moveCar() {
  if (event.key === 'd') {
    setInterval(keepMovingCar, 16);
  }
}
function keepMovingCar() {
  data.location.x += 4;
  data.location.x = String(data.location.x);
  var goLeft = 'left: ' + data.location.x + 'px';
  $car.style = goLeft;
  data.location.x = parseInt(data.location.x);
}
