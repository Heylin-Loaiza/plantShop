import { prices } from '../../utils/config.js';

const plantPrice = (plantObj, next) => {
  const price = {};

  const { name } = plantObj;
  price.plant = prices[name];

  plantObj.prices = price;

  console.log(plantObj)
  console.log(plant)
  next();
};

const pot = () => {

};

export default plantPrice;
