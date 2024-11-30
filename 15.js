function encontrarDuplicadosSet(arr) {
let uniqueSet = new Set();
let duplicates = [];
for (const item of arr) {
 if (uniqueSet.has(item)) {
        duplicates.push(item);
    } else {
     uniqueSet.add(item);
 }
 }
    return duplicates;
  }
  const miArray = [1, 2, 3, 2, 4, 1];
  const duplicados = encontrarDuplicadosSet(miArray);
  console.log(duplicados);