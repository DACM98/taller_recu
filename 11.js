function numerosMayores(array, numero) {
    return array.filter(elemento => elemento > numero);
  }
let miArreglo = [3, 7, 2, 9, 5];
let numeroComparar = 5;
let resultado = numerosMayores(miArreglo, numeroComparar);
console.log(resultado);