require.context('/public/', true, /^\.\/.*\.png|\.\/.*\.PNG/);

export default function extrasImg(plant) {
  const {
    name, pot, style, soil, extras, color,
  } = plant;
  let extraImages = `
    <img class="img-item" id="img-pot" src="/public/${pot}-${style}-${color}.png" alt="">
    <img class="img-item" id="img-soil" src="/public/soil-${soil}.png" alt="">
    <img class="img-item img-item--plant" id="img-name" src="/public/plant-${name}.png" alt="">`;

  if (extras) {
    extras.forEach((item) => {
      extraImages += `<img class="img-item" id="img-extras" src="/public/${item}.png" alt="">`;
    });
  }

  return extraImages;
}
