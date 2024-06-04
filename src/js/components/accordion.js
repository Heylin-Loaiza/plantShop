/* eslint-disable no-param-reassign */
import pricesInfo from './priceInfo.js';
import { info } from '../../services/api.js';
import { accordionAlerts } from './inventoryAlerts.js';

const accordion = async (plantObj) => {
  const infoPlant = await info(`${plantObj.name}`);
  const { description, care } = infoPlant;

  document.getElementById('container__info').insertAdjacentHTML(
    'afterbegin',
    `<button class="accordion">Price breakdown</button>
    <div class="panel">
      ${pricesInfo(plantObj)}
    </div>

    <button class="accordion">Inventory alerts</button>
    <div class="panel">
      <p>${accordionAlerts(plantObj)}</p>
    </div>

    <button class="accordion">Plant description</button>
    <div class="panel">
      <p>${description}</p>
    </div>

    <button class="accordion">Caring tips</button>
    <div class="panel">
      <p>${care.light}</p>
      <p>${care.water}</p>
      <p>${care.humidity}</p>
      <p>${care.temperature}</p>
    </div>`,
  );

  const acc = document.querySelectorAll('.accordion');
  const panels = document.querySelectorAll('.panel');

  acc.forEach((button, index) => {
    button.addEventListener('click', () => {
      button.classList.toggle('active');

      panels.forEach((panel, i) => {
        if (i === index) {
          panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
        } else {
          panel.style.display = 'none';
        }
      });
    });
  });
};

export default accordion;
