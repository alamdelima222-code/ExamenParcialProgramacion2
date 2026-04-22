// JavaScript: obtiene referencias a los elementos del formulario
const formulario = document.getElementById("formRegistro");
const correoInput = document.getElementById("correo");
const telefonoInput = document.getElementById("telefono");
const nombreInput = document.getElementById("nombreApellido");
const mensaje = document.getElementById("mensaje");

// JavaScript: expresión regular simple para validar formato de correo
const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// JavaScript: escucha el evento submit para validar campos obligatorios
formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nombre = nombreInput.value.trim();
  const correo = correoInput.value.trim();
  const telefono = telefonoInput.value.trim();

  mensaje.classList.remove("exito", "error");

  if (!nombre) {
    mostrarError("El campo Nombre y apellido es obligatorio.");
    return;
  }

  if (!patronCorreo.test(correo)) {
    mostrarError("Ingrese un correo electrónico con formato válido.");
    return;
  }

  if (!telefono) {
    mostrarError("El teléfono no puede quedar vacío.");
    return;
  }

  // JavaScript: si todo es válido, confirma el registro
  mensaje.textContent = "Cliente registrado correctamente. ¡Gracias por su interés!";
  mensaje.classList.add("exito");

  formulario.reset();
});

// JavaScript: función auxiliar para mostrar mensajes de error
function mostrarError(texto) {
  mensaje.textContent = texto;
  mensaje.classList.add("error");
}
