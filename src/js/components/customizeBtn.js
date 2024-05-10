const container = document.getElementById('card__container');

// function link() {
//   const anchor = document.createElement('a');
//   anchor.href = '/purchaseDetails.html';
//   anchor.textContent = 'Check store availability';
//   anchor.id = 'store-link';
//   anchor.classList.add('btn', 'btn-bg', 'anchor');
//   container.appendChild(anchor);
//   anchor.addEventListener('click', () => {
//     sessionStorage.setItem('plantObj', JSON.stringify(state));
//   });
// }

function renderBtn(plant) {
  const btn = document.createElement('a');
  btn.href = '/customizeForm.html';
  btn.textContent = 'Customize!';
  btn.classList.add('btn', 'btn--bg', 'card-btn');
  container.appendChild(btn);

  btn.addEventListener('click', () => {
    sessionStorage.setItem('plantObj', JSON.stringify(plant));
  });
}

export default renderBtn;
