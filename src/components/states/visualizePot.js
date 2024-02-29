import { observerPot, observerStylePot, observerColor } from './getPotDesing';
import { state } from '../../utils/config';

function handlePotChange(pot) {
  const potText = document.getElementById('p-pot');
  const imgPot = document.getElementById('img-pot');
  potText.textContent = `${pot} ${state.style}`;
  imgPot.setAttribute(
    'src',
    `./public/${pot}-${state.style}-${state.color}.png`,
  );
  state.pot = pot;
}

function handleStyleChange(style) {
  const potText = document.getElementById('p-pot');
  const imgPot = document.getElementById('img-pot');
  potText.textContent = `${state.pot} ${style}`;
  imgPot.setAttribute(
    'src',
    `./public/${state.pot}-${style}-${state.color}.png`,
  );
  state.style = style;
}

function handleColorPotChange(color) {
  const colorText = document.getElementById('p-color');
  const imgPot = document.getElementById('img-pot');
  colorText.textContent = `${color}`;
  imgPot.setAttribute(
    'src',
    `./public/${state.pot}-${state.style}-${color}.png`,
  );
  state.color = color;
}

function initPotVisualizer() {
  observerPot.subscribe(handlePotChange);
  observerStylePot.subscribe(handleStyleChange);
  observerColor.subscribe(handleColorPotChange);
}

export default initPotVisualizer;
