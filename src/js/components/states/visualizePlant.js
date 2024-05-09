import Observer from '../../../utils/Observer.js';
import { state } from '../../../utils/config.js';

const observerName = new Observer();

function getPlantName() {
  const select = document.getElementById('plant');
  select.addEventListener('change', (e) => {
    const name = e.currentTarget.value;
    observerName.notify(name);
  });
}

function handleNameChange(name) {
  const nameText = document.getElementById('p-name');
  const imgName = document.getElementById('img-name');
  const cardTitle = document.getElementById('card-title');
  nameText.textContent = `${name}`;
  cardTitle.textContent = `${name}`;
  imgName.setAttribute('src', `./public/plant-${name}.png`);
  state.name = name;
}

function initPlantVisualizer() {
  getPlantName();
  observerName.subscribe(handleNameChange);
}

export default initPlantVisualizer;
