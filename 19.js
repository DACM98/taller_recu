function contarOcurrencias(array, palabra) {
    let contador = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] === palabra) {
        contador++;
      }
    }
    return contador;
  }
  const palabras = ["manzana", "banana", "pera", "manzana", "uva"];
  const palabraBuscada = "manzana";
  const resultado = contarOcurrencias(palabras, palabraBuscada);
  console.log(palabraBuscada + " aparece " + resultado + " veces.");