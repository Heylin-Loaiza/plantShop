import typeOfPlants from '../utils/config';
import Plant from './builderPlant';
import card from './card';

const form = document.getElementById('form');

function getName(formData) {
  const light = typeOfPlants[formData.location];
  if (formData.pets === 'toxic' && formData.watering === 'default') {
    return light[formData.pets].default;
  }
  if (formData.pets === 'toxic' && formData.watering === 'overwater') {
    return light[formData.pets].overwater;
  }
  return light[formData.pets].default;
}

function formEvent() {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const dataExtras = [];
    data.getAll('extras').forEach((value) => {
      dataExtras.push(value);
    });

    const formData = Object.fromEntries(data);
    formData.extras = dataExtras;

    const plantName = getName(formData);
    const { soil, style, extras } = formData;

    const plant = new Plant(plantName)
      .setSoil(soil)
      .setPotDecoration(style)
      .setPotColor('unpainted')
      .setExtras(extras);
    if (formData.watering === 'overwater') {
      plant.withClayPot();
      plant.setSoil('drainage');
    } else {
      plant.withCeramicPot();
    }

    card(plant, 'card__container');
  });
}

export default formEvent;
// LINEA 46 renderBtn(plant);
