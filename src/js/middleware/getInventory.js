import { inventory } from '../../services/api.js';

const fetchStock = async (plantObj, next) => {
  try {
    const res = await Promise.all([
      inventory('plant', `${plantObj.name}`),
      inventory('soil', `${plantObj.soil}`),
      inventory('pot', `${plantObj.pot}-${plantObj.style}-${plantObj.color}`),
    ]);

    const stock = {
      plant: res[0],
      soil: res[1],
      pot: res[2],
    };
    // eslint-disable-next-line no-param-reassign
    plantObj.stock = stock;
    next();
  } catch (err) {
    console.error(err);
  }
};

export default fetchStock;
