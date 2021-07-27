const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

export const createGame = async (gameName) => {
  const response = await fetch(`${baseURL}games/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(gameName),
  });

  const gameId = await response.json();
  return gameId;
};

export const addScore = async (player, gameId) => {
  const response = await fetch(`${baseURL}games/${gameId}/scores/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(player),
  });

  const result = await response.json();
  return result;
};

export const getScore = async (gameId) => {
  const response = await fetch(`${baseURL}games/${gameId}/scores/`);
  const result = await response.json();
  return result;
};
