document.addEventListener("DOMContentLoaded", function () {
    // Redirigir a la galería correspondiente al hacer clic en una sección
    document.querySelectorAll(".seccion").forEach(seccion => {
        seccion.addEventListener("click", function () {
            let categoria = this.getAttribute("data-seccion");
            window.location.href = `galeria.html?categoria=${categoria}`;
        });
    });
});
