function renderBtn() {
  // state.color = plant.color;
  // state.name = plant.name;
  // state.pot = plant.pot;
  // state.soil = plant.soil;
  // state.style = plant.style;
  // state.extras = plant.extras;
  const container = document.getElementById('card__container');
  const btn = document.createElement('button');
  btn.textContent = 'Customize!';
  btn.classList.add('btn', 'btn--bg', 'card-btn');
  container.appendChild(btn);

  btn.addEventListener('click', async (e) => {
    e.preventDefault();
    const title = document.getElementById('title-form');
    const formContainer = document.getElementById('form-container');

    await fetch('../template/customize-form.html')
      .then((response) => response.text())
      .then((htmlContent) => {
        console.log(htmlContent);
        formContainer.innerHTML = htmlContent;
      })
      .catch((error) => console.error('Error al cargar el contenido:', error));

    title.innerHTML = 'Customize your plant!';
  });
}

export default renderBtn;
