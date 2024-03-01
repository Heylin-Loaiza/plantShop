import { getPotDesing } from './getPotDesing';
import { state } from '../../utils/config';
import initPotVisualizer from './visualizePot';
import initSoilVisualizer from './visualizeSoil';
import initPlantVisualizer from './visualizePlant';
import initExtrasVisualizer from './visualizeExtras';

export default function customResult(plant) {
  state.name = plant.name;
  state.pot = plant.pot;
  state.soil = plant.soil;
  state.color = plant.color;
  state.style = plant.style;
  state.extras = plant.extras;

  getPotDesing();
  initPotVisualizer();
  initSoilVisualizer();
  initPlantVisualizer();
  initExtrasVisualizer();
}
