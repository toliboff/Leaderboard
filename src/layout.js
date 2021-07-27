export const buildLayout = () => `
<section class="scores">
      <div class="title">
        <h2>Recent scores</h2>
        <button id="refreshBtn" type="button">Refresh</button>
      </div>

      <ul class="score-list">
        <li>Name: 100</li>
        <li>Name: 20</li>
        <li>Name: 50</li>
      </ul>
    </section>

    <section class="add-score">
      <h2>Add your score</h2>

      <form action="#">
        <input type="text" id="name" placeholder="Your name" autocomplete="off">
        <input type="text" id="score" placeholder="Your score" autocomplete="off">
        <button type="submit" id="submitBtn">Submit</button>
      </form>
    </section>
`;

export default buildLayout;