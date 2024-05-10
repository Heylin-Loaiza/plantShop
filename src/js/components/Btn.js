function Btn(plant, html, text) {
  const container = document.getElementById('card__container');
  const anchor = document.createElement('a');

  anchor.href = html;
  anchor.textContent = text;
  anchor.classList.add('btn', 'btn--bg', 'anchor');
  container.appendChild(anchor);

  anchor.addEventListener('click', () => {
    sessionStorage.setItem('plantObj', JSON.stringify(plant));
  });
}

export default Btn;
