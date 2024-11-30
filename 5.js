function esPar(numero) {
    if (typeof numero !== "number") {
      return "Por favor, ingresa un número.";
    } else if (numero % 2 === 0) {
      return "El número es par.";
    } else {
      return "El número es impar.";
    }
  }
  let numero = 25;
  let resultado = esPar(numero);
  console.log(resultado);