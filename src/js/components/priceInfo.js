const pricesInfo = (obj) => {
  const {
    name, style, color, pot, soil, extras, prices,
  } = obj;

  const extra = extras.map((element) => `<p>${element}</p>`).join('');
  const extrasPrices = extras.map((element) => `<p>$${prices[element]}</p>`).join('');

  const text = `
  <div>
    <div>
      <p>${name}</p>
      <p>${color} ${pot}pot -${style}</p>
      <p>${soil}</p>
      ${extras !== undefined ? extra : null}
      <p>Total</p>
    </div>
    <div>
      <p>$${prices.plant}</p>
      <p>$${prices.potPrice}</p>
      <p>$${prices.soil}</p>
      ${extras !== undefined ? extrasPrices : null}
      <p>$${prices.total}</p>
    </div>
  </div>`;

  return text;
};

export default pricesInfo;
