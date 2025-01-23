// script.js

// Mostrar el popup
document.getElementById('popupBtn').addEventListener('click', function () {
    document.getElementById('popup').style.display = 'block';
  });
  
  // Cerrar el popup
  document.getElementById('closePopup').addEventListener('click', function () {
    document.getElementById('popup').style.display = 'none';
  });
  // script.js

// Seleccionar todos los enlaces con data-lightbox
const lightboxLinks = document.querySelectorAll('[data-lightbox="gallery"]');

// Crear el elemento lightbox
const lightbox = document.createElement('div');
lightbox.classList.add('lightbox');
document.body.appendChild(lightbox);

// Mostrar imagen en el visor al hacer clic
lightboxLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault(); // Evitar que se abra el enlace
    const img = document.createElement('img');
    img.src = link.href;
    lightbox.innerHTML = ''; // Limpiar lightbox antes de mostrar
    lightbox.appendChild(img);
    lightbox.style.display = 'flex';
  });
});

// Cerrar el lightbox al hacer clic fuera de la imagen
lightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
});
document.addEventListener("DOMContentLoaded", () => {
    const carta = document.getElementById("cartaTexto");
    carta.style.animation = "typewriter 5s steps(50, end)";
  });
  // Función de Mensaje Sorpresa
const mensajes = [
    "Hoy es un día perfecto porque tú estás en mi vida. 💕",
    "Tu sonrisa es lo mejor de mi día. 🌟",
    "Eres el regalo más bonito que me ha dado la vida. 💖",
    "Gracias por existir. 🥰",
    "¡Nunca olvides lo especial que eres para mí! 🌸"
  ];
  
  document.addEventListener("DOMContentLoaded", () => {
    const mensajeDelDia = mensajes[Math.floor(Math.random() * mensajes.length)];
    const mensajeSorpresa = document.querySelector("#mensaje-sorpresa");
    if (mensajeSorpresa) {
      mensajeSorpresa.textContent = mensajeDelDia;
    }
  });
  