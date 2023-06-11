const darkElem = document.querySelectorAll('.dark');
const darkerElem = document.querySelectorAll('.darker');
const toggleButton = document.getElementById('dark-btn'); 
const logoImage = document.getElementById('logo-image');
const logoImageBot=document.getElementById('logo-imageBot');




const darkMode = localStorage.getItem('darkMode');

// Función para habilitar el modo oscuro
function enableDarkMode() {
  toggleButton.innerHTML = '<i class="fas fa-sun"></i>';
  logoImage.src = 'imagenes/logo1.png';
  logoImageBot.src = 'imagenes/logo1.png';

  darkerElem.forEach(function(element) {
    element.classList.add('modo-oscuro');
  });

  darkElem.forEach(function(element) {
    element.classList.add('dark-mode');
  });

  // Almacenar el estado del modo oscuro en localStorage
  localStorage.setItem('darkMode', 'enabled');
}

// Función para deshabilitar el modo oscuro
function disableDarkMode() {
  toggleButton.innerHTML = '<i class="fas fa-moon"></i>';
  logoImage.src = 'imagenes/logo.png';
  logoImageBot.src = 'imagenes/logo.png';

  darkerElem.forEach(function(element) {
    element.classList.remove('modo-oscuro');
  });

  darkElem.forEach(function(element) {
    element.classList.remove('dark-mode');
  });

  // Almacenar el estado del modo oscuro en localStorage
  localStorage.setItem('darkMode', 'disabled');
}

// Verificar el estado del modo oscuro al cargar la página
if (darkMode === 'enabled') {
  enableDarkMode();
} else {
  disableDarkMode();
}

// Evento de clic para cambiar el modo oscuro
toggleButton.addEventListener('click', function() {
  // Verificar el estado actual del modo oscuro
  if (toggleButton.innerHTML.includes('fa-moon')) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});


/////////////// carrousel
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 10000); // cambia cada 10s
}


/*    capybara_song_2_0.mp3  */     

document.addEventListener('DOMContentLoaded', function() {
    const musicToggle = document.getElementById('music-btn');
    const audio = new Audio('capybara_song_2_0.mp3 ');

    // Reproducir música al cargar la página
    audio.play();

    musicToggle.addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
        musicToggle.classList.remove('paused');
        musicToggle.innerHTML = '<i class="fa fa-music"></i>';
        
    } else {
        audio.pause();
        musicToggle.classList.add('paused');
        musicToggle.innerHTML = '<i class="fa fa-pause"></i>';

      }
    });
  });

///////////////
