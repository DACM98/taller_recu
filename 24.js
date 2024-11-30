let btnContar = document.getElementById('btnContar');
let contadorElemento = document.getElementById('contador');
let contador = 0;
function actualizarContador() {
    contador++;
    contadorElemento.textContent = contador;
}
btnContar.addEventListener('click', actualizarContador);