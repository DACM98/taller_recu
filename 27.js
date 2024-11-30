let colorSelector = document.getElementById('colorSelector');
let body = document.body;

colorSelector.addEventListener('change', () => {
    body.style.backgroundColor = colorSelector.value;
});