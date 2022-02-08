const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', checkInput)

function checkInput(event) {
    event.currentTarget.value.length == event.currentTarget.dataset.length
        ? onValidInput() 
        : onInvalidInput();
}

function onValidInput() {
    validationInput.classList.add('valid');
    validationInput.classList.remove('invalid');
}

function onInvalidInput() {
    validationInput.classList.add('invalid');
    validationInput.classList.remove('valid');
}