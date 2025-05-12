// registro.js

document.getElementById('formReserva').addEventListener('submit', function(event) {
    event.preventDefault();

    const reserva = {
        tipoDoc: document.getElementById('tipoDoc').value,
        numeroDoc: document.getElementById('numeroDoc').value,
        nombre: document.getElementById('nombre').value,
        celular: document.getElementById('celular').value,
        correo: document.getElementById('correo').value,
        menu: document.getElementById('menu').value,
        tipoServicio: document.getElementById('tipoServicio').value
    };

    // Guardar en localStorage
    let reservas = JSON.parse(localStorage.getItem('reservas')) || [];
    reservas.push(reserva);
    localStorage.setItem('reservas', JSON.stringify(reservas));

    // Mostrar mensaje de éxito
    document.getElementById('mensajeExito').style.display = 'block';

    // Resetear el formulario
    document.getElementById('formReserva').reset();
});
// Mostrar reservas guardadas