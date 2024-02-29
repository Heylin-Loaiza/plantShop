import customizeForm from '../template/customize-form.html';
import customResult from './states/customResults';

function renderBtn(plant) {
  const container = document.getElementById('card__container');
  const btn = document.createElement('button');
  btn.textContent = 'Customize!';
  btn.classList.add('btn', 'btn--bg', 'card-btn');
  container.appendChild(btn);

  btn.addEventListener('click', async (e) => {
    e.preventDefault();
    const title = document.getElementById('title-form');
    const formContainer = document.getElementById('form-container');

    formContainer.innerHTML = customizeForm;
    title.innerHTML = 'Customize your plant!';

    customResult(plant);
  });
}

export default renderBtn;
