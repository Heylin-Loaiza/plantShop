import card from './js/components/card.js';
import Btn from './js/components/Btn.js';
import { addToStack, execute } from './utils/pipeline.js';
import fetchStock from './js/middleware/getInventory.js';
import { getPotPrice, getExtrasPrice, getTotal } from './js/middleware/getPrices.js';

const html = '/customizeForm.html';
const text = 'Back to customization';
const plantObj = JSON.parse(sessionStorage.getItem('plantObj'));
card(plantObj, 'preview__card');
Btn(plantObj, html, text, 'preview__card');
addToStack(fetchStock, getPotPrice, getExtrasPrice, getTotal);
execute(plantObj);
