let boton = document.getElementById('mostrar-ocultar');
let elemento = document.getElementById('elemento-a-ocultar');

boton.addEventListener('click', () => {
    if (elemento.style.display === 'none') {
        elemento.style.display = 'block';
    } else {
        elemento.style.display = 'none';
    }
});