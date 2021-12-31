document.addEventListener('keydown', rotateCar);
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

var position = $car.getBoundingClientRect();
console.log('Position: ', position);
