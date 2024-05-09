import { colors } from '../../../utils/config.js';
import Observer from '../../../utils/Observer.js';
import eventInput from './inputsEvent.js';

const observerColor = new Observer();

function renderColorInput() {
  const container = document.getElementById('container-color');
  colors.forEach((color) => {
    const input = `
    <div class="answer-group">
      <input data-id="${color}" id="${color}" class="inputcolor ${color}" type="radio" value="${color}" name="color" />
      <label for="${color}" class="switch">${color}</label>
    </div>`;
    container.insertAdjacentHTML('afterbegin', input);
  });
}

function toggleSwitch() {
  const checkbox = document.getElementById('color');
  console.log(checkbox);
  const container = document.getElementById('container-color');
  checkbox.addEventListener('click', (e) => {
    const option = e.currentTarget.checked;
    if (option) {
      renderColorInput();
      eventInput(observerColor, 'color');
    } else {
      container.innerHTML = '';
    }
  });
}

export { toggleSwitch, observerColor };
