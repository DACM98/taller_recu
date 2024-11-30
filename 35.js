let personas = [
    { nombre: 'mario', edad: 60, ciudad: 'bogota' },
    { nombre: 'sofia', edad: 45, ciudad: 'popayan' },
    { nombre: 'pamela', edad: 39, ciudad: 'medellin' }
  ];
  function crearTabla(datos) {
    let tabla = document.createElement('table');
    let encabezado = tabla.createTHead();
    let filaEncabezado = encabezado.insertRow();
    for (let propiedad in datos[0]) {
      let celdaEncabezado = filaEncabezado.insertCell();
      celdaEncabezado.textContent = propiedad;
    }
    let cuerpoTabla = tabla.createTBody();
    datos.forEach(persona => {
      let fila = cuerpoTabla.insertRow();
      for (let propiedad in persona) {
        let celda = fila.insertCell();
        celda.textContent = persona[propiedad];
      }
    });
    document.body.appendChild(tabla);
  }
  crearTabla(personas);