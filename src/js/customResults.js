import { state } from '../utils/config';

export default async function customResult(plant) {
  state.name = plant.name;
  state.pot = plant.pot;
  state.soil = plant.soil;
  state.color = plant.color;
  state.style = plant.style;
  state.extras = plant.extras;

  await import('./components/states/getPotDesing').then(({ getPotDesing }) => getPotDesing());
  const { default: initPotVisualizer } = await import('./components/states/visualizePot');
  const { default: initSoilVisualizer } = await import('./components/states/visualizeSoil');
  const { default: initPlantVisualizer } = await import('./components/states/visualizePlant');
  const { default: initExtrasVisualizer } = await import('./components/states/visualizeExtras');

  initPotVisualizer();
  initSoilVisualizer();
  initPlantVisualizer();
  initExtrasVisualizer();
}
