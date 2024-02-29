import Observer from '../../utils/Observer';
import eventInput from './inputsEvent';
import { state } from '../../utils/config';

const observerSoil = new Observer();

function getSoil() {
  eventInput(observerSoil, 'soil');
}

function handleChangeSoil(soil) {
  const soilText = document.getElementById('p-soil');
  const imgSoil = document.getElementById('img-soil');
  soilText.textContent = `${soil}`;
  imgSoil.setAttribute('src', `./public/soil-${soil}.png`);
  state.soil = soil;
}

function initSoilVisualizer() {
  getSoil();
  observerSoil.subscribe(handleChangeSoil);
}

export default initSoilVisualizer;
