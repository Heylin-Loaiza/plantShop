/* eslint-disable no-param-reassign */
import { prices } from '../../utils/config.js';

const getPotPrice = (plantObj, next) => {
  const price = {};

  const { pot, style, color } = plantObj;
  const potType = prices[pot];

  if (color !== 'unpainted' && style === 'decorated') {
    price.potPrice = potType.especial;
  } else if (color !== 'unpainted' && style === 'simple') {
    price.potPrice = potType.painted;
  } else {
    price.potPrice = potType[style];
  }

  plantObj.prices = price;
  next();
};

const getExtrasPrice = (plantObj, next) => {
  const extraList = plantObj.extras;

  extraList.forEach((element) => {
    plantObj.prices[element] = prices[element];
  });

  next();
};

const getTotal = (plantObj, next) => {
  const { name, soil } = plantObj;

  plantObj.prices.plant = prices[name];
  plantObj.prices.soil = prices[soil];

  const values = Object.values(plantObj.prices);
  const total = values.reduce((acc, currentValue) => acc + currentValue, 0).toFixed(2);

  plantObj.prices.total = total;

  next();
};

export { getPotPrice, getExtrasPrice, getTotal };
