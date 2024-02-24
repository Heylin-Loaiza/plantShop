import typeOfPlants from '../utils/config';
import ObjPlant from './plantRender/plantRender';

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
    // document.getElementById('submit-btn').disabled = true;

    const data = new FormData(e.target);
    const dataExtras = [];
    data.getAll('extras').forEach((value) => {
      dataExtras.push(value);
    });

    const formData = Object.fromEntries(data);
    formData.extras = dataExtras;

    const plantName = getName(formData);
    const {
      soil, style, extras, watering,
    } = formData;

    ObjPlant(plantName, soil, style, extras, watering);
  });

  // document.getElementById('reload-btn').addEventListener('click', () => {
  //   // eslint-disable-next-line no-restricted-globals
  //   location.reload();
  // });
}

export default formEvent;
