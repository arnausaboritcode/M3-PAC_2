/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';
import * as bootstrap from 'bootstrap';

/**
 * Write any other JavaScript below
 */

/* Boilerplate default JS code

+( function() {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
} )();

*/

//Navbar link active class

$(document).ready(function() {
    // Obtén el nombre de la página actual
    var currentPage = window.location.pathname.split('/').pop();

    // Itera sobre los enlaces de la barra de navegación
    $('.navbar-nav a').each(function() {
        // Asegúrate de que el enlace tenga un atributo href antes de intentar acceder a él
        if (this.hasAttribute('href')) {
            var linkPage = this.href.split('/').pop();

            // Compara la página actual con la página del enlace y agrega la clase "active" si son iguales
            if (currentPage === linkPage) {
                $(this).addClass('active');
            }
        }
    });
});
