const container = document.getElementById('card__container');

function renderBtn() {
  // state.color = plant.color;
  // state.name = plant.name;
  // state.pot = plant.pot;
  // state.soil = plant.soil;
  // state.style = plant.style;
  // state.extras = plant.extras;

  container.insertAdjacentHTML(
    'beforeend',
    '<button class="btn btn--bg card-btn" id="customize-btn">Customize!</button>',
  );

  const btn = document.getElementById('customize-btn');
  btn.addEventListener('click', async (e) => {
    e.preventDefault();
    const title = document.getElementById('title-form');
    const formContainer = document.getElementById('form-container');
    const response = await fetch('../template/customizeHtml.html');
    console.log(response);
    const newForm = await response.text();

    formContainer.innerHTML = newForm;
    title.innerHTML = 'Customize your plant!';
  });
}

export default renderBtn;
