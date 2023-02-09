window.addEventListener('DOMContentLoaded', event => {
    // Simple-DataTables
    // https://github.com/fiduswriter/Simple-DataTables/wiki

    const tabla = document.getElementById('tabla');
    if (tabla) {
        new simpleDatatables.DataTable(tabla);
    }
});
