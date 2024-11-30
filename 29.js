let imagenes = ["imagen1.jpg", "imagen2.jpg", "imagen3.jpg"];
let indiceImagen = 0;
let imagen = document.getElementById('imagen');
function siguiente() {
  indiceImagen++;
  if (indiceImagen >= imagenes.length) {
    indiceImagen = 0;
  }
  imagen.src = imagenes[indiceImagen];
}
function anterior() {
  indiceImagen--;
  if (indiceImagen < 0) {
    indiceImagen = imagenes.length - 1; 
  }
  imagen.src = imagenes[indiceImagen];
}