/*
Template Name: Admin Template
Author: Wrappixel

File: js
*/

// ==============================================================
// Auto select left navbar
// ==============================================================
$(function () {
    "use strict";
    var url = window.location + "";
    var path = url.replace(
        window.location.protocol + "//" + window.location.host + "/",
        ""
    );

    // Filtrar y encontrar el elemento correspondiente en la barra de navegación
    var element = $("ul#sidebarnav a").filter(function () {
        return this.href === url || this.href === path;
    });

    // Recorrer los elementos padres hasta .sidebar-nav y aplicar clases
    element.parentsUntil(".sidebar-nav").each(function () {
        if ($(this).is("li") && $(this).children("a").length !== 0) {
            $(this).children("a").addClass("active");
            if ($(this).parent("ul#sidebarnav").length === 0) {
                $(this).addClass("active");
            } else {
                $(this).addClass("selected");
            }
        } else if (!$(this).is("ul") && $(this).children("a").length === 0) {
            $(this).addClass("selected");
        } else if ($(this).is("ul")) {
            $(this).addClass("in");
        }
    });

    // Activar el elemento encontrado
    element.addClass("active");

    // Manejar eventos de clic en los enlaces de la barra de navegación
    $("#sidebarnav a").off("click").on("click", function (e) {
        e.preventDefault(); // Evitar el comportamiento predeterminado del enlace

        if (!$(this).hasClass("active")) {
            // Ocultar menús abiertos y remover clases
            $("ul", $(this).parents("ul:first")).removeClass("in");
            $("a", $(this).parents("ul:first")).removeClass("active");

            // Abrir el nuevo menú y agregar clases
            $(this).next("ul").addClass("in");
            $(this).addClass("active");
        } else {
            // Si el enlace ya está activo, remover la clase active
            $(this).removeClass("active");
            $(this).parents("ul:first").removeClass("active");
            $(this).next("ul").removeClass("in");
        }
    });

    // Prevenir comportamiento por defecto en enlaces con clase .has-arrow
    $("#sidebarnav > li > a.has-arrow").off("click").on("click", function (e) {
        e.preventDefault();
    });
});

// Carga dinámica de contenidos
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.sidebar-link');
    const contentContainer = document.getElementById('content-container');

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const page = this.getAttribute('data-page');

            fetch(page)
                .then(response => response.text())
                .then(html => {
                    contentContainer.innerHTML = html;
                })
                .catch(error => {
                    console.error('Error al cargar la página:', error);
                    contentContainer.innerHTML = '<p>Error al cargar la página.</p>';
                });
        });
    });
});
