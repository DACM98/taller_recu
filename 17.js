function eliminarDuplicadosObjeto(arr) {
    let unique = {};
    return arr.filter(item => {
    if (!unique[item]) {
    unique[item] = true;
     return true;
    }
    return false;
    });
  }
  
  let arrayConDuplicados = [1, 2, 2, 3, 4, 4];
  let arraySinDuplicados = eliminarDuplicadosObjeto(arrayConDuplicados);
  console.log(arraySinDuplicados);