const refs = {
  boxes: document.querySelector('#boxes'),
  inputAmount: document.querySelector('#controls input'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
}


refs.createBtn.addEventListener('click', onCreateBtnClick);
refs.destroyBtn.addEventListener('click', onDestroyBtnClick);

function onCreateBtnClick() {
  createBoxes(refs.inputAmount.value);
}

function onDestroyBtnClick() {
  refs.boxes.innerHTML = '';
}

function createBoxes(amount) {
  const elements = [];
  let elementSize = 30;

  for (let i = 0; i < amount; i += 1) {
    const size = `${elementSize}px`;
    const color = getRandomHexColor();

    const element = document.createElement('div');
    element.classList.add('box');
    element.style.width = size;
    element.style.height = size;
    element.style.backgroundColor = color;

    elements.push(element);

    elementSize += 10;
  }

  refs.boxes.append(...elements);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
