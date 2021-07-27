export const buildLayout = () => `
<section class="scores">
      <div class="title">
        <h2>Recent scores</h2>
        <button id="refreshBtn" type="button">Refresh</button>
      </div>

      <ul class="score-list" id="score-list">
      </ul>
    </section>

    <section class="add-score">
      <h2>Add your score</h2>

      <form action="#" id="form">
        <input type="text" id="name" placeholder="Your name" autocomplete="off" required>
        <input type="number" id="score" placeholder="Your score" autocomplete="off" min="0" required>
        <button type="submit" id="submitBtn">Submit</button>
      </form>
    </section>
`;

export const showScores = (scores) => scores.map((score) => `<li>${score.user}: ${score.score}</li>`).join('');
