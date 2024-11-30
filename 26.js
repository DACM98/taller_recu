let form = document.getElementById('myForm');
let emailInput = document.getElementById('email');
let errorElement = document.getElementById('error');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let email = emailInput.value;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errorElement.textContent = 'Por favor, ingresa una dirección de correo electrónico válida.';
    } else {
        console.log('Correo electrónico válido:', email);
    }
});