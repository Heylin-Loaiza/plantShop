import Observer from '../../../utils/Observer.js';
import { state } from '../../../utils/config.js';
import images from '../plantImg.js';

const observerExtras = new Observer();

function AddExtras() {
  const extras = document.querySelectorAll('.custom-extra');
  const valuesExtra = [];

  extras.forEach((item) => {
    item.addEventListener('change', (e) => {
      console.log(e);
      const optionExtra = e.currentTarget.value;

      if (e.currentTarget.checked && !valuesExtra.includes(optionExtra)) {
        valuesExtra.push(optionExtra);
      } else if (
        !e.currentTarget.checked
        && valuesExtra.includes(optionExtra)
      ) {
        const index = valuesExtra.indexOf(optionExtra);
        valuesExtra.splice(index, 1);
      }
      observerExtras.notify(valuesExtra);
    });
  });
}

function handleExtrasChange(extras) {
  const divExtras = document.getElementById('p-extras');
  const containerImages = document.getElementById('card-img');
  let text = '';
  extras.forEach((item) => {
    text += `<p class="card--font value extras">${item}</p>`;
  });
  divExtras.innerHTML = text;
  state.extras = extras;
  containerImages.innerHTML = images(state);
}

function initExtrasVisualizer() {
  AddExtras();
  observerExtras.subscribe(handleExtrasChange);
}

export default initExtrasVisualizer;
