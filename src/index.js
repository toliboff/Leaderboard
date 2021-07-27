import { getScore, createGame } from './api.js';
import { buildLayout } from './layout.js';
import './style.css';

const main = document.querySelector('#main');
main.innerHTML = buildLayout();


window.addEventListener('DOMContentLoaded', async () => {
  const game = { name: 'My cool new game' };
  const { result } = await createGame(game);
  const gameId = result.split(' ')[3];
  console.log(gameId);

  addScore()
});


// const gg = async () => {
//   const t = await createGame()
//   console.log(t);
// };
