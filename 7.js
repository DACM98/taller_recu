function esPalindromo(palabra) {
    let palabraLimpia = palabra.toLowerCase().replace(/\s/g, '');
    let palabraInvertida = palabraLimpia.split('').reverse().join('');
    return palabraLimpia === palabraInvertida;
  }
  console.log(esPalindromo("radar")); 
  console.log(esPalindromo("anilina"));
  console.log(esPalindromo("hola")); 
  console.log(esPalindromo("anita lava la tina")); 