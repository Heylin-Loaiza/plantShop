import Observer from '../../../utils/Observer.js';
import eventInput from './inputsEvent.js';
import { toggleSwitch } from './toggleSwitch.js';

const observerPot = new Observer();
const observerStylePot = new Observer();

function getPotDesing() {
  toggleSwitch();
  eventInput(observerPot, 'pot');
  eventInput(observerStylePot, 'styles');
}

export {
  getPotDesing, observerPot, observerStylePot,
};
