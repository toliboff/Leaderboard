import { getScore, createGame, addScore } from './api.js';
import { buildLayout } from './layout.js';
import './style.css';

const main = document.querySelector('#main');
main.innerHTML = buildLayout();
const form = document.querySelector('#form');
const refreshButton = document.querySelector('#refreshBtn');

window.addEventListener('DOMContentLoaded', async () => {
  const game = { name: 'My cool new game' };
  const { result } = await createGame(game);
  const gameId = result.split(' ')[3];

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const [user, score] = form.children;
    const player = { user: user.value, score: score.value };
    await addScore(player, gameId);

    // const result = await addScore(player, gameId);
    // console.log(result);
  });

  refreshButton.addEventListener('click', async () => {
    const result = await getScore(gameId);
    console.log(result);
  });
});


// const gg = async () => {
//   const t = await createGame()
//   console.log(t);
// };
