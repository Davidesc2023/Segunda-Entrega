document.addEventListener('DOMContentLoaded', function() {
    // Validación del formulario
    const form = document.getElementById('contacto-form');
    form.addEventListener('submit', function(event) {
      // Evitamos el envío del formulario si hay errores
      if (!validateForm()) {
        event.preventDefault();
      } else {
        alert('Formulario enviado correctamente. ¡Gracias por contactarnos!');
      }
    });
  
    // Función de validación personalizada
    function validateForm() {
      const nombre = document.getElementById('nombre');
      const correo = document.getElementById('correo');
      const telefono = document.getElementById('telefono');
      const comentarios = document.getElementById('comentarios');
      let valid = true;
  
      // Validar nombre
      if (nombre.value.trim() === '') {
        alert('Por favor, ingrese su nombre.');
        valid = false;
      }
  
      // Validar correo electrónico
      const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!correoRegex.test(correo.value)) {
        alert('Por favor, ingrese un correo electrónico válido.');
        valid = false;
      }
  
      // Validar teléfono
      const telefonoRegex = /^[0-9]{10}$/;
      if (!telefonoRegex.test(telefono.value)) {
        alert('Por favor, ingrese un número de teléfono válido (10 dígitos).');
        valid = false;
      }
  
      // Validar comentarios
      if (comentarios.value.trim() === '') {
        alert('Por favor, ingrese sus comentarios.');
        valid = false;
      }
  
      return valid;
    }
  
    // Cambiar el color de fondo cuando se pasa el ratón sobre la sección de contacto
    const contactoSeccion = document.querySelector('.contacto-seccion');
    contactoSeccion.addEventListener('mouseenter', function() {
      this.style.backgroundColor = '#f77f00'; // Cambiar a un tono más oscuro
    });
  
    contactoSeccion.addEventListener('mouseleave', function() {
      this.style.backgroundColor = '#fca311'; // Volver al color original
    });
  
    // Desplazamiento suave a la sección de contacto
    const contactLink = document.querySelector('a[href="#contacto"]');
    contactLink.addEventListener('click', function(event) {
      event.preventDefault();
      document.querySelector('#contacto').scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  