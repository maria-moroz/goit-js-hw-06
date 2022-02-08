const refs = {
    nameInput: document.querySelector('#name-input'),
    nameOutput: document.querySelector('#name-output'),
}

refs.nameInput.addEventListener('input', displayName)

function displayName(event) {
    refs.nameOutput.textContent = event.currentTarget.value;
}