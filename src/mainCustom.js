import card from './js/components/card.js';
import customResult from './js/customResults.js';

const plantObj = JSON.parse(sessionStorage.getItem('plantObj'));
card(plantObj, 'container');
customResult(plantObj);
