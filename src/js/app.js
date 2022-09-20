import Game from './Game';
import Logic from './Logic';

const game = new Game();
const logic = new Logic();

game.newGame();

document.addEventListener('click', (e) => {
  if (e.target.tagName.toLowerCase() === 'img' || e.target.children.length === 1) {
    logic.countClick += 1;
    logic.checkClick();
  } else {
    console.log('промах');
  }
});
