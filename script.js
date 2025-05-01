document.addEventListener("DOMContentLoaded", function () {
    fetch("backend/fetch_news.php")
        .then(response => response.json())
        .then(data => {
            let newsContainer = document.getElementById("news-container");
            data.forEach(news => {
                let div = document.createElement("div");
                div.innerHTML = `<h3>${news.title}</h3><p>${news.description}</p>`;
                newsContainer.appendChild(div);
            });
        });

    fetch("backend/fetch_events.php")
        .then(response => response.json())
        .then(data => {
            let eventsContainer = document.getElementById("events-container");
            data.forEach(event => {
                let div = document.createElement("div");
                div.innerHTML = `<h3>${event.title}</h3><p>${event.date}</p>`;
                eventsContainer.appendChild(div);
            });
        });
});

// function toggleMenu() {
//     let nav = document.getElementById("nav-menu");
//     nav.classList.toggle("show");
// }

function toggleMenu() {
  let nav = document.getElementById("nav-menu");
  let hamburger = document.querySelector(".hamburger");
  nav.classList.toggle("show");

  // Toggle icon
  if (hamburger.innerText === "☰") {
      hamburger.innerText = "✖";
  } else {
      hamburger.innerText = "☰";
  }
}

function openLightbox(imageSrc, captionText) {
    var lightbox = document.getElementById('lightbox');
    var lightboxImage = document.getElementById('lightbox-image');
    var caption = document.getElementById('caption');
  
    lightbox.style.display = 'block';
    lightboxImage.src = imageSrc;
    caption.innerHTML = captionText;
  }
  
  function closeLightbox() {
    var lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
  }
  let sliderWrapper = document.querySelector('.slider-wrapper');
let sliderImages = document.querySelectorAll('.slider img');

let currentImageIndex = 0;
const imageWidth = sliderImages[0].clientWidth;

function startImageSlider() {
  setInterval(() => {
    currentImageIndex = (currentImageIndex + 1) % sliderImages.length;
    slideImage();
  }, 3000); // Change image every 3 seconds (adjust as needed)
}

function slideImage() {
  sliderWrapper.style.transform = `translateX(-${currentImageIndex * imageWidth}px)`;
}

// Start the image slider when the window loads
window.onload = startImageSlider;