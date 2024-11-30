let claves = ['nombre', 'edad', 'ciudad'];
let valores = ['Juan', 30, 'Madrid'];
let objeto = {};
for (let i = 0; i < claves.length; i++) {
  objeto[claves[i]] = valores[i];
}

console.log(objeto);