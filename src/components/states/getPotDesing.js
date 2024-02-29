import Observer from '../../utils/Observer';
import eventInput from './inputsEvent';

const observerPot = new Observer();
const observerStylePot = new Observer();
const observerColor = new Observer();

function getPotDesing() {
  eventInput(observerPot, 'pot');
  eventInput(observerStylePot, 'styles');
  eventInput(observerColor, 'color');
}

export {
  getPotDesing, observerPot, observerStylePot, observerColor,
};
