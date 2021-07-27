import { getScore, createGame, addScore } from './api.js';
import { buildLayout } from './layout.js';
import './style.css';

const main = document.querySelector('#main');
main.innerHTML = buildLayout();

window.addEventListener('DOMContentLoaded', async () => {
  const form = document.querySelector('#form');
 

  const game = { name: 'My cool new game' };
  const { result } = await createGame(game);
  const gameId = result.split(' ')[3];

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const [user, score] = form.children;
    const player = { user, score };
    const result = await addScore(player, gameId);
    console.log(result);
  });

  
});


// const gg = async () => {
//   const t = await createGame()
//   console.log(t);
// };
