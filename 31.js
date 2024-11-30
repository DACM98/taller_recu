function contarLetras(cadena) {
    cadena = cadena.toLowerCase();
    let frecuencias = {};
    for (let i = 0; i < cadena.length; i++) {
      let letra = cadena[i];
      if (frecuencias[letra]) {
        frecuencias[letra]++;
    } else {
     frecuencias[letra] = 1;
    }
}
 return frecuencias;
 }
let texto = "Hola, mundo! ¿Cómo estás?";
let resultado = contarLetras(texto);
console.log(resultado);