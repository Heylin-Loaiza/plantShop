/* eslint-disable no-undef */
import Plant from '../../utils/builderPlant';
import card from './card';
import renderBtn from './customizeBtn';

export default function ObjPlant(plantName, soil, style, extras, watering) {
  const plant = new Plant(plantName)
    .setSoil(soil)
    .setPotDecoration(style)
    .setPotColor('unpainted')
    .setExtras(extras);
  if (watering === 'overwater') {
    plant.withClayPot();
    plant.setSoil('drainage');
  } else {
    plant.withCeramicPot();
  }

  card(plant, 'card__container');
  renderBtn(plant);
}
