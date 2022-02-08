const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === '' || password.value === '') {
        window.alert('Все поля должны быть заполнены!')
    }

    console.log(`${email.name}: ${email.value}`);
    console.log(`${password.name}: ${password.value}`);

    event.currentTarget.reset();
}