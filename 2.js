function sumarArray(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
      suma += array[i];
    }
    return suma;
  }
  let numeros = [1, 2, 3, 4, 5];
  let resultado = sumarArray(numeros);
  console.log(resultado); 