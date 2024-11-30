function encontrarComunes(array1, array2) {
    return array1.filter(elemento => array2.includes(elemento));
  }
let array1 = [1, 2, 3, 4,10];
let array2 = [3, 4, 5, 6,10];
let comunes = encontrarComunes(array1, array2);
console.log(comunes); 