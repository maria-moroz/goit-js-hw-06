const refs = {
  colorCode: document.querySelector('.widget .color'),
  changeColorBtn: document.querySelector('.change-color')
}

refs.changeColorBtn.addEventListener('click', onChangeColorBtnClick);

function onChangeColorBtnClick() {
  const randomColor = getRandomHexColor();

  document.body.style.backgroundColor = randomColor;
  refs.colorCode.textContent = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
