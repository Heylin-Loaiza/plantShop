/* eslint-disable no-undef */
import Plant from '../builderPlant';
import card from '../card';

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
}
