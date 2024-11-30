
let element = document.getElementById('myElement');
document.addEventListener('mousemove', (event) => {
  element.style.left = event.clientX + 'px';
  element.style.top = event.clientY + 'px';
});