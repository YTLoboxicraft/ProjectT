// Función para mostrar/ocultar secciones
function showSection(sectionId) {
    // Oculta todas las secciones
    document.querySelectorAll('.menu-section').forEach(section => {
        section.style.display = 'none';
    });

    // Muestra la sección seleccionada
    document.getElementById(sectionId).style.display = 'block';
}

// Mostrar la sección de Cuts por defecto
document.addEventListener('DOMContentLoaded', function() {
    showSection('cuts');
});