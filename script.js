// script.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const pais = document.getElementById('pais').value;
        const telefono = document.getElementById('telefono').value;
        
        console.log(`Nombre: ${nombre}`);
        console.log(`Correo electrónico: ${email}`);
        console.log(`País: ${pais}`);
        console.log(`Teléfono: ${telefono}`);
        
        alert('Formulario enviado correctamente!');
        
        form.reset();
    });
});

/* header flotante */



