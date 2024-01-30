// Configuración de tooltip para el botón "enviar" y para los íconos de redes sociales //
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

// Configuración de popover para el logo 'Viajes Chile' en el footer//
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

// Manejador de evento para el botón "enviar" //
$(document).ready(function () {
    $("#enviarMensaje").click(function () {
        alert("El mensaje fue enviado correctamente.");
    });
});

// Smooth Scroll Inicio //
$(document).ready(function() {
    $('a.nav-link[href="#inicio"]').on('click', function(event) {
      event.preventDefault();
      var targetPosition = $('#inicio').offset().top;

      $('html, body').animate({
        scrollTop: targetPosition
      }, 800); 
    });
  });


// Smooth Scroll About-section //
$(document).ready(function() {
  $('a.nav-link[href="#quienes-somos"]').on('click', function(event) {
    event.preventDefault();
    var targetPosition = $('#quienes-somos').offset().top;

    $('html, body').animate({
      scrollTop: targetPosition
    }, 800); 
  });
});

  // Smooth Scroll Featured-section //
$(document).ready(function() {
  $('a.nav-link[href="#destacados"]').on('click', function(event) {
    event.preventDefault();
    var targetPosition = $('#destacados').offset().top;

    $('html, body').animate({
      scrollTop: targetPosition
    }, 800); 
  });
});

// Smooth Scroll Featured-section //
$(document).ready(function() {
$('a.nav-link[href="#contacto"]').on('click', function(event) {
    event.preventDefault();
    var targetPosition = $('#contacto').offset().top;

    $('html, body').animate({
      scrollTop: targetPosition
    }, 800); 
  });
});

// Cambiar el estilo de .navbar a  .navbar.scrolled cuando el scroll esté fuera del header//
document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.querySelector('.navbar');
  var header = document.getElementById('inicio');

  window.addEventListener('scroll', function () {
      var headerHeight = header.offsetHeight;

      if (window.scrollY > headerHeight) {
          navbar.classList.add('scrolled');
      } else {
          navbar.classList.remove('scrolled');
      }
  });
});
