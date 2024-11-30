const arrayOriginal = ['diego', 'andres', 'futbol'];

arrayOriginal.forEach((palabra, index) => {
    arrayOriginal[index] = palabra.toUpperCase();
});

console.log(arrayOriginal); 