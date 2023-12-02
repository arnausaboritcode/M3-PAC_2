/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';


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
    var currentPage = window.location.pathname.split('/').pop();
    $('.navbar-nav a').each(function() {
        if (this.hasAttribute('href')) {
            var linkPage = this.href.split('/').pop();
            if (currentPage === linkPage) {
                $(this).addClass('active');
            }
        }
    });
});

//Initialize Aos library

AOS.init();

