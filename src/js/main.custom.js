import customResult from './customResults.js';

const plantObj = JSON.parse(sessionStorage.getItem('plantObj'));
customResult(plantObj);
