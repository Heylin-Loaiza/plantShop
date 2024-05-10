import card from './js/components/card.js';
import Btn from './js/components/Btn.js';

const html = '/customizeForm.html';
const text = 'Back to customization';
const plantObj = JSON.parse(sessionStorage.getItem('plantObj'));
card(plantObj, 'preview__card');
Btn(plantObj, html, text, 'preview__card');
