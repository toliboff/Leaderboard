export const buildLayout = () => `
<section class="scores bg-white">
      <div class="title flex">
        <h2>Recent scores</h2>
        <button class="btn" id="refreshBtn" type="button"><i class="fas fa-sync-alt"></i> Refresh</button>
      </div>

      <ul class="score-list" id="score-list">
      </ul>
    </section>

    <section class="add-score bg-white">
      <h2>Add your score</h2>

      <form action="#" id="form" class="form flex">
        <input type="text" id="name" placeholder="Your name" autocomplete="off" required>
        <input type="number" id="score" placeholder="Your score" autocomplete="off" min="0" required>
        <button type="submit" id="submitBtn" class="btn"><i class="fas fa-user-plus"></i> Submit</button>
      </form>
    </section>
`;

export const showScores = (scores) => scores.map((score) => `<li class="flex"><span>${score.user}</span><span> ${score.score}</span></li>`).join('');
