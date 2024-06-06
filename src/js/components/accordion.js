/* eslint-disable no-param-reassign */
import pricesInfo from './priceInfo.js';
import { info } from '../../services/api.js';
import { alerts, accordionAlerts } from './alerts.js';

const accordion = async (plantObj) => {
  const {
    name, style, prices, stock,
  } = plantObj;
  const infoPlant = await info(`${name}`);
  const { description, care } = infoPlant;

  document.getElementById('info__plant').insertAdjacentHTML(
    'afterbegin',
    `<h1>Plant with ${style} pot and  soil</h1>
    <p class="info__plant-price">$${prices.total}</p>
    ${alerts(plantObj)}
    `,
  );

  document.getElementById('container__info').insertAdjacentHTML(
    'beforeend',
    `<div class="accordion">
      <button class="accordion-control">Price breakdown</button>
      <div class="panel">
        ${pricesInfo(plantObj)}
      </div>
      
      <button class="accordion-control">Inventory alerts</button>
      <div class="panel">
        ${accordionAlerts(plantObj)}
      </div>
      
      <button class="accordion-control">Plant description</button>
      <div class="panel">
        <p>${description}</p>
      </div>
      
      <button class="accordion-control">Caring tips</button>
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
      </div>
    </div>`,
  );

  const acc = document.querySelectorAll('.accordion-control');
  const panels = document.querySelectorAll('.panel');

  acc.forEach((button, index) => {
    button.addEventListener('click', () => {
      button.classList.toggle('active');

      panels.forEach((panel, i) => {
        if (i === index) {
          panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
          button.classList.remove('active');
        } else {
          panel.style.display = 'none';
        }
      });
    });
  });

  if (stock.plant.stock === 0 || stock.soil.stock === 0 || stock.pot.stock === 0) {
    acc.forEach((panel, index) => (index !== 1 ? panel.style.display = 'none' : 'block'));

    const inventoryAlertsPanel = document.querySelectorAll('.panel')[1]; // Assuming the second panel is "Inventory alerts"
    inventoryAlertsPanel.style.display = 'block';
  }
};

export default accordion;
