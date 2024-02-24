// import { extrasImg } from './extras.js';
import '../styles/style.css';

require.context('../../public/', true, /^\.\/.*\.png|\.\/.*\.PNG/);

function card(plant, container) {
  const image = `<img src="/public/${plant.pot}-${plant.style}-${plant.color}.png" alt="">`;

  let listExtras = '';
  plant.extras.forEach((item) => {
    listExtras += `<p class="card--font value text-uc extras">${item}</p>`;
  });

  const materials = ['Name', 'Soil', 'Pot', 'Color', 'Extras'];

  document.getElementById(container).insertAdjacentHTML(
    'afterbegin',
    `<div class="card">
      <p class="card-text">The perfect plant for you is...
      <span class="card__title text-uc" id="card-title">${plant.name}</span>
      </p>
      
      <div class="card__img" id="card-img">
        ${image}
      </div>
      <div class="card-info">
        <div class="line">
        ${materials.map((item) => `<p class="card--font keys">${item}</p>`).join('')}
        </div>
        <div>
          <p class="card--font value text-uc" id="p-name">${plant.name}</p>
          <p class="card--font value text-uc" id="p-soil">${plant.soil}</p>
          <p class="card--font value text-uc" id="p-pot">${plant.pot} with ${plant.style}</p>
          <p class="card--font value text-uc" id="p-color">${plant.color}</p>
          <div class="extras" id="p-extras">${listExtras}</div>
        </div>
      </div>
    </div>
    `,
  );
}

export default card;
