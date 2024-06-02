/* eslint-disable no-param-reassign */
import pricesInfo from './infoAccordion.js';

const accordion = (plantObj) => {
  document.getElementById('container__info').insertAdjacentHTML(
    'afterbegin',
    `<button class="accordion">Section 1</button>
    <div class="panel">
      ${pricesInfo(plantObj)}
    </div>

    <button class="accordion">Section 2</button>
    <div class="panel">
      <p>Lorem ipsum...</p>
    </div>

    <button class="accordion">Section 3</button>
    <div class="panel">
      <p>Lorem ipsum...</p>
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
