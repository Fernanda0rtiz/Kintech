// Get the Pac-Man elements
const pacMan = document.querySelector('.pac-man');
const pacMan2 = document.querySelector('.pac-man.player2');

// Get the game board element
const gameBoard = document.querySelector('#game-board');

// initial position of Pac-Man 1
let pacManX = 400;
let pacManY = 350;

// initial position of Pac-Man 2
let pacMan2X = 700;
let pacMan2Y = 350;

// variables to store the direction of movement
let direccion = '';
let direccion2 = '';

// function to move Pac-Man in a direction
function mover() { 
  switch (direccion) {
    case 'w':
      pacManY = Math.max(pacManY - 15, 0);
      break;
    case 's':
      pacManY = Math.min(pacManY + 15, gameBoard.offsetHeight - pacMan.offsetHeight);
      break;
    case 'a':
      pacManX = Math.max(pacManX - 15, 0);
      break;
    case 'd':
      pacManX = Math.min(pacManX + 15, gameBoard.offsetWidth - pacMan.offsetWidth);
      break;
  }
  // update Pac-Man 1 position
  pacMan.style.top = pacManY + 'px';
  pacMan.style.left = pacManX + 'px';
}

// function to move Pac-Man 2 in a direction
function mover2() { 
  switch (direccion2) {
    case 'u':
      pacMan2Y = Math.max(pacMan2Y - 15, 0);
      break;
    case 'j':
      pacMan2Y = Math.min(pacMan2Y + 15, gameBoard.offsetHeight - pacMan2.offsetHeight);
      break;
    case 'h':
      pacMan2X = Math.max(pacMan2X - 15, 0);
      break;
    case 'k':
      pacMan2X = Math.min(pacMan2X + 15, gameBoard.offsetWidth - pacMan2.offsetWidth);
      break;
  }
  // update Pac-Man 2 position
  pacMan2.style.top = pacMan2Y + 'px';
  pacMan2.style.left = pacMan2X + 'px';
}

// move Pac-Man 1 continuously
setInterval(mover, 100);

// move Pac-Man 2 continuously
setInterval(mover2, 100);

// capture pressed keys for Pac-Man 1
document.addEventListener('keydown', (event) => {
  if (event.key == "w" || event.key == "a" || event.key == "s" || event.key == "d") {
    direccion = event.key
  }
  if (event.key == "u" || event.key == "h" || event.key == "j" || event.key == "k") {
    direccion2 = event.key
  }
});

// // capture pressed keys for Pac-Man 2
// document.addEventListener('keydown', (event) => {
//   direccion2 = event.key;
// });

// remove dots
const dots = document.querySelectorAll('.dot');
dots.forEach((dot) => {
  dot.addEventListener('touchstart', () => {
    dot.remove();
  });
});

