import Game from './Game';
import Logic from './Logic';

const game = new Game();
const logic = new Logic();

game.newGame();

document.addEventListener('click', (e) => {
  if (e.target.tagName.toLowerCase() === 'img' || e.target.children.length === 1) {
    logic.catchClick += 1;
  } else {
    logic.checkClick();
    logic.missClick += 1;
  }
});
