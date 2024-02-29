function eventInput(observer, key) {
  const inputs = document.querySelectorAll(`.input${key}`);
  inputs.forEach((input) => {
    input.addEventListener('change', (event) => {
      const target = event.currentTarget.dataset.id;
      console.log(target); // quitar
      observer.notify(target);
    });
  });
}

export default eventInput;
