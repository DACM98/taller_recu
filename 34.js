let listaTareas = document.getElementById('listaTareas');
let nuevaTareaInput = document.getElementById('nuevaTarea');
function agregarTarea() {
let tarea = nuevaTareaInput.value;
    if (tarea === '') return;
let li = document.createElement('li');
    li.textContent = tarea;
let botonEliminar = document.createElement('button');
botonEliminar.textContent = 'Eliminar';
    botonEliminar.onclick = () => {
        listaTareas.removeChild(li);
    };
    let botonCompletar = document.createElement('button');
    botonCompletar.textContent = 'Completar';
    botonCompletar.onclick = () => {
        li.style.textDecoration = 'line-through';
    };
li.appendChild(botonEliminar);
li.appendChild(botonCompletar);
listaTareas.appendChild(li);
    nuevaTareaInput.value = '';
}