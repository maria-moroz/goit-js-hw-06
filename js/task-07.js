const refs = {
    fontSizeControl: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
}

refs.fontSizeControl.addEventListener('input', onControllerChange)

function onControllerChange(event) {
    refs.text.style.fontSize = `${event.currentTarget.value}px`;
}