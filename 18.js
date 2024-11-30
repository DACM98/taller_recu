function generarArrayAleatorio(cantidad) {
    let array = [];
    for (let i = 0; i < cantidad; i++) {
      const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
      array.push(numeroAleatorio);
    }
    return array;
  }
  let miArray = generarArrayAleatorio(10);
  console.log(miArray);