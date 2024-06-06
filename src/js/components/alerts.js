/* eslint-disable no-unused-expressions */
const alerts = (obj) => {
  const { stock } = obj;
  const { plant, soil, pot } = stock;

  let alertText = '';
  let colorClass = '';
  let btnState = '';
  let btnColor = 'btn--bg';

  if (plant.stock === 0 || soil.stock === 0 || pot.stock === 0) {
    alertText = 'One of the items in your order is out of stock. Please check the inventory alerts';
    colorClass = 'red';
    btnState = 'disabled';
    btnColor = 'btn-grey';
  } else if (plant.stock < 10 || soil.stock < 10 || pot.stock < 10) {
    alertText = 'One of the items in your order has limited stock. Order soon!';
    colorClass = 'yellow';
  } else {
    alertText = 'In stock';
    colorClass = 'green';
  }

  return `<p class="${colorClass}">${alertText}</p>
  <button class="btn ${btnColor}" ${btnState}>Order now!</button>`;
};

const accordionAlerts = (obj) => {
  const { stock } = obj;
  const { plant, soil, pot } = stock;

  const product = [];

  const messageTemplate = {
    plant: {
      noStock: `${obj.name} is out of stock. Please select a different plant`,
      limit: `${obj.name}: Only ${plant.stock} items left in stock!`,
    },
    soil: {
      noStock: `${obj.soil} soil is out of stock. Please select a different soil`,
      limit: `${obj.soil}: Only ${soil.stock} items left in stock!`,
    },
    pot: {
      noStock: `${obj.color} ${obj.pot} pot is out of stock. Please select a different pot`,
      limit: `${obj.color} ${obj.pot}: Only ${pot.stock} items left in stock!`,
    },
  };

  let colorClass = '';
  Object.entries(stock).forEach(([key, value]) => {
    if (value.stock === 0) {
      product.push(messageTemplate[key].noStock);
      colorClass = 'red';
    } else if (value.stock < 10) {
      product.push(messageTemplate[key].limit);
      colorClass = 'yellow';
    } else {
      null;
    }
  });

  const prodAlert = product.map((text) => `<p class="${colorClass}">${text}</p>`).join('');
  return prodAlert;
};

export { alerts, accordionAlerts };
