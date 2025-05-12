// admin.js

window.addEventListener('DOMContentLoaded', () => {
    const reservas = JSON.parse(localStorage.getItem('reservas')) || [];
    const tbody = document.querySelector('#tablaReservas tbody');

    if (reservas.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7">No hay reservas registradas.</td></tr>`;
        return;
    }

    reservas.forEach(reserva => {
        const fila = document.createElement('tr');

        fila.innerHTML = `
            <td>${reserva.tipoDoc}</td>
            <td>${reserva.numeroDoc}</td>
            <td>${reserva.nombre}</td>
            <td>${reserva.celular}</td>
            <td>${reserva.correo}</td>
            <td>${reserva.menu}</td>
            <td>${reserva.tipoServicio}</td>
        `;

        tbody.appendChild(fila);
    });
});
// Eliminar reservas
document.getElementById('eliminarReservas').addEventListener('click', () => {
    localStorage.removeItem('reservas');
    const tbody = document.querySelector('#tablaReservas tbody');
    tbody.innerHTML = `<tr><td colspan="7">No hay reservas registradas.</td></tr>`;
});