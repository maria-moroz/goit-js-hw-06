const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', checkInput)

function checkInput(event) {
    if (event.currentTarget.value.length.toString() === event.currentTarget.dataset.length) {
        onValidInput();
    } else {
        onInvalidInput();
    }
}

function onValidInput() {
    validationInput.classList.add('valid');
    validationInput.classList.remove('invalid');
}

function onInvalidInput() {
    validationInput.classList.add('invalid');
    validationInput.classList.remove('valid');
}