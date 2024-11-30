function encontrarMayor(array) {
    let mayor = array[0];  
    for (let i = 1; i < array.length; i++) {
      if (array[i] > mayor) {
        mayor = array[i];
      }
    }  
    return mayor;
  }
  let numeros = [3, 7, 2, 9, 5];
  let numeroMayor = encontrarMayor(numeros);
  console.log(numeroMayor); 