import { state } from '../utils/config.js';
import Btn from './components/Btn.js';

export default async function customResult(plant) {
  state.name = plant.name;
  state.pot = plant.pot;
  state.soil = plant.soil;
  state.color = plant.color;
  state.style = plant.style;
  state.extras = plant.extras;

  const html = '/purchaseDetails.html';
  const text = 'Check store availability';
  Btn(state, html, text, 'card__container');

  await import('./components/states/getPotDesing.js').then(({ getPotDesing }) => getPotDesing());
  const { default: initPotVisualizer } = await import('./components/states/visualizePot.js');
  const { default: initSoilVisualizer } = await import('./components/states/visualizeSoil.js');
  const { default: initPlantVisualizer } = await import('./components/states/visualizePlant.js');
  const { default: initExtrasVisualizer } = await import('./components/states/visualizeExtras.js');

  initPotVisualizer();
  initSoilVisualizer();
  initPlantVisualizer();
  initExtrasVisualizer();
}
