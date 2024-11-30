function sumarPares(array) {
    let pares = array.filter(numero => numero % 2 === 0);
    let sumaPares = pares.reduce((acumulador, numero) => acumulador + numero, 0);
    return sumaPares;
  }
  let numeros = [1, 2, 3, 4, 5, 6, 7, 8];
  let resultado = sumarPares(numeros);
  console.log("La suma de los números pares es:", resultado); 