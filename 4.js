function invertirString(str) {
    let stringInvertida = '';
    for (let i = str.length - 1; i >= 0; i--) {
      stringInvertida += str[i];
    }
    return stringInvertida;
  }
  let cadena = "DIEGO";
  let cadenaInvertida = invertirString(cadena);
  console.log(cadenaInvertida);