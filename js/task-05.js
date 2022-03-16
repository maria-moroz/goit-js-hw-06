const refs = {
    nameInput: document.querySelector('#name-input'),
    nameOutput: document.querySelector('#name-output'),
}

refs.nameInput.addEventListener('input', displayName)

function displayName(event) {
    if (event.currentTarget.value === '') {
        refs.nameOutput.textContent = 'Anonymous';
        return;
    }
    refs.nameOutput.textContent = event.currentTarget.value;
}