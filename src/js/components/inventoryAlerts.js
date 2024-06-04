const alerts = (obj) => {
  const { stock } = obj;
  const { plant, soil, pot } = stock;

  let alertText = '';
  if (plant.stock === 0 || soil.stock === 0 || pot.stock === 0) {
    alertText = 'One of the items in your order is out of stock. Please check the inventory alerts';
  } else if (plant.stock < 10 || soil.stock < 10 || pot.stock < 10) {
    alertText = 'One of the items in your order has limited stock. Order soon!';
  } else {
    alertText = 'In stock';
  }

  return alertText;
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
  }

  Object.entries(stock).forEach(([key, value]) => {
    if (value.stock === 0) {
      product.push(messageTemplate[key].noStock);
    } else if (pot.stock < 10) {
      product.push(messageTemplate[key].limit);
    } else {
      null;
    }
  });

  const prodAlert = product.map((text) => `<p>${text}</p>`).join('');
  return prodAlert;
};

export { alerts, accordionAlerts };
