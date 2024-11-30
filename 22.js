function mostrarTexto() {
    let input = document.getElementById("miInput");
    let parrafo = document.getElementById("textoMostrado");
    parrafo.textContent = input.value;
}