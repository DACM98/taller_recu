let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
while (true) {
 let intentoUsuario = parseInt(prompt("Adivina el número (entre 1 y 100):"));
  intentos++;
  if (isNaN(intentoUsuario)) {
    alert("Por favor, ingresa un número válido.");
  } else if (intentoUsuario < numeroSecreto) {
    alert("El número es demasiado bajo.");
  } else if (intentoUsuario > numeroSecreto) {
    alert("El número es demasiado alto.");
  } else {
    alert(`¡Felicidades! Adivinaste el número en ${intentos} intentos.`);
    break;
  }
}