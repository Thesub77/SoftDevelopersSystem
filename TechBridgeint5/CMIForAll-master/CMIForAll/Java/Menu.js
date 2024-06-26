document.addEventListener("DOMContentLoaded", function () {
    const profilePic = document.getElementById("profile-pic");
    const dropdownMenu = document.getElementById("dropdown-menu");
    const sidebar = document.querySelector(".left-sidebar");
    const sidebarCollapse = document.getElementById("sidebarCollapse");

    profilePic.addEventListener("click", function (event) {
        event.preventDefault(); // Evita la acción predeterminada del enlace
        event.stopPropagation(); // Evita que se cierre al hacer clic en la imagen

        if (dropdownMenu.style.display === "block") {
            dropdownMenu.style.display = "none";
        } else {
            dropdownMenu.style.display = "block";
        }
    });

    // Cerrar el menú desplegable cuando se haga clic fuera de él
    document.addEventListener("click", function (event) {
        if (!dropdownMenu.contains(event.target) && event.target !== profilePic) {
            dropdownMenu.style.display = "none";
        }
    });

    // Mostrar/ocultar el menú lateral al hacer clic en el botón de colapso
    if (sidebarCollapse) {
        sidebarCollapse.addEventListener('click', function () {
            sidebar.classList.toggle('show-sidebar');
        });
    }

    // Mantener el menú lateral visible al cambiar el tamaño de la pantalla
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            sidebar.classList.add('show-sidebar');
        } else {
            sidebar.classList.remove('show-sidebar');
        }
    });
});


function toggleAccordion(id) {
    var element = document.getElementById(id);
    if (element.style.display === "block") {
        element.style.display = "none";
    } else {
        element.style.display = "block";
    }
}

