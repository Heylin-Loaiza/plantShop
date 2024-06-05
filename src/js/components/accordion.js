/* eslint-disable no-param-reassign */
import pricesInfo from './priceInfo.js';
import { info } from '../../services/api.js';
import { alerts, accordionAlerts } from './inventoryAlerts.js';

const accordion = async (plantObj) => {
  const { name, style, prices } = plantObj;
  const infoPlant = await info(`${name}`);
  const { description, care } = infoPlant;

  document.getElementById('info__plant').insertAdjacentHTML(
    'afterbegin',
    `<h1>Plant with ${style} pot and  soil</h1>
    <p class="info__plant-price">$${prices.total}</p>
    ${alerts(plantObj)}
    <button class="btn btn--bg">Order now!</button>
    `,
  );

  document.getElementById('container__info').insertAdjacentHTML(
    'beforeend',
    `<button class="accordion">Price breakdown</button>
    <div class="panel">
      ${pricesInfo(plantObj)}
    </div>

    <button class="accordion">Inventory alerts</button>
    <div class="panel">
      ${accordionAlerts(plantObj)}
    </div>

    <button class="accordion">Plant description</button>
    <div class="panel">
      <p>${description}</p>
    </div>

    <button class="accordion">Caring tips</button>
    <div class="panel">
      <div>
        <h2 class="iconCare">Light</h2>
        <p>${care.light}</p>
      </div>
      <div>
        <h2 class="iconCare">Water</h2>
        <p>${care.water}</p>
      </div>
      <div>
        <h2 class="iconCare">Humidity</h2>
        <p>${care.humidity}</p>
      </div>
      <div>
        <h2 class="iconCare">Temperature</h2>
        <p>${care.temperature}</p>
      </div>
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
