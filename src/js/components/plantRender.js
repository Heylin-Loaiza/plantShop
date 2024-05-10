/* eslint-disable no-undef */
import Plant from '../../utils/builderPlant.js';
import card from './card.js';
import Btn from './Btn.js';

export default function ObjPlant(plantName, soil, style, extras, watering) {
  const html = '/customizeForm.html';
  const text = 'Customize!';

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
  Btn(plant, html, text);
}
