import Observer from '../../utils/Observer';
import eventInput from './inputsEvent';
import { toggleSwitch } from './toggleSwitch';

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
