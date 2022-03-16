const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const  { email, password } = event.currentTarget.elements;

    if (email.value === '' || password.value === '') {
        window.alert('Все поля должны быть заполнены!')
    } else {
        const data = {
            email: email.value,
            password: password.value
        }
        
        console.log(`email: ${data.email}`);
        console.log(`password: ${data.password}`);
    }

    event.currentTarget.reset();
}