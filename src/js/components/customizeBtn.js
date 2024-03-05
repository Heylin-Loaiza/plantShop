import customizeForm from '../../pages/customize-form.html';
import customResult from '../customResults';
import { state } from '../../utils/config';

const container = document.getElementById('card__container');

function link() {
  const anchor = document.createElement('a');
  anchor.href = '/purchaseDetails.html';
  anchor.textContent = 'Check store availability';
  anchor.id = 'store-link';
  anchor.classList.add('btn', 'btn-bg', 'anchor');
  container.appendChild(anchor);
  anchor.addEventListener('click', () => {
    sessionStorage.setItem('plantObj', JSON.stringify(state));
  });
}

function renderBtn(plant) {
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

    container.removeChild(btn);
    link();
  });
}

export default renderBtn;
