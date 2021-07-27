const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

export const createGame = async (gameName) => {
  const response = await fetch(`${baseURL}games/`, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(gameName),
  });

  const gameId = await response.json();
  return gameId;
};

export const addScore = async (player, gameId) => {
  const response = await fetch(`${baseURL}games/${gameId}/scores/`, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(player),
  });

  const result = await response.json();
  return result;
};
