let numeros = [3, 7, 15, 9, 22, 5];
function filtrarNumerosMayoresA10(numero) {
  return numero > 10;
}
let numerosMayoresA10 = numeros.filter(filtrarNumerosMayoresA10);
console.log(numerosMayoresA10);