function miMap(array, funcion) {
    let nuevoArray = [];
    for (let i = 0; i < array.length; i++) {
      let resultado = funcion(array[i], i, array);
      nuevoArray.push(resultado);
    }
    return nuevoArray;
  }
let numeros = [1, 2, 3, 4, 5];
let duplicar = (numero) => numero * 2;
let numerosDoblados = miMap(numeros, duplicar);
console.log(numerosDoblados);