window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.navbar-container');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 1)';
    } else {
        navbar.style.background = 'linear-gradient(to bottom, rgba(0, 0, 0, 0.88), rgba(0, 0, 0, 0))';
    }
});

function alertnavbar(isi) {
    if (isi == 1) {
        alert('coming soon!')
    }
    if (isi == 4) {
        alert("tupi mondok jd gaada videonya 🤗")
    }
    if (isi == 5) {
        alert('mau nyari apasiii')
    }
    if (isi == 6) {
        alert('notif kosong kaya hati mas developer')
    }

}

// Mendapatkan elemen popup dan tombol
let popup = document.getElementById("myPopup");
let openBtn = document.getElementById("play");
let closeBtn = document.getElementById("closePopupBtn");
let popup2 = document.getElementById("popup2")
let openBtn2 = document.getElementById("info");
let closeBtn2 = document.getElementById("closePopupBtn2");

// Fungsi untuk membuka popup
openBtn.onclick = function () {

    popup.style.display = "block";
    popup.style.overflow = "auto";
    document.body.style.overflow = "hidden"; // Menonaktifkan scroll pada body
}

// Fungsi untuk menutup popup dengan tombol X
closeBtn.onclick = function () {
    popup.style.display = "none";
    popup.style.overflow = "hidden";
    document.body.style.overflow = "auto"; // Mengembalikan scroll pada body

}

// Fungsi untuk membuka popup
openBtn2.onclick = function () {

    popup2.style.display = "block";
    popup2.style.overflow = "auto";
    document.body.style.overflow = "hidden"; // Menonaktifkan scroll pada body
}

// Fungsi untuk menutup popup dengan tombol X
closeBtn2.onclick = function () {
    popup2.style.display = "none";
    popup2.style.overflow = "hidden";
    document.body.style.overflow = "auto"; // Mengembalikan scroll pada body

}

// Fungsi untuk menutup popup ketika area di luar konten diklik
window.onclick = function (event) {
    if (event.target == popup) {
        popup.style.display = "none";
        document.body.style.overflow = "auto"; // Mengembalikan scroll pada body
    }
    if (event.target == popup2) {
        popup2.style.display = "none";
        document.body.style.overflow = "auto"; // Mengembalikan scroll pada body
    }
}

function openFullscreen() {
    let img = document.getElementById("img-album");
    if (img.requestFullscreen) {
        img.requestFullscreen();
    } else if (img.mozRequestFullScreen) { // Firefox
        img.mozRequestFullScreen();
    } else if (img.webkitRequestFullscreen) { // Chrome, Safari, and Opera
        img.webkitRequestFullscreen();
    } else if (img.msRequestFullscreen) { // IE/Edge
        img.msRequestFullscreen();
    }
}

let currentSlide = 0;
const totalSlides = 4;
const slider = document.getElementById('slider');

function showSlide(index) {
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

let currentImageIndex = 0;
const images = document.querySelectorAll('.slide img');
const fullscreenContainer = document.getElementById('fullscreenContainer');
const fullscreenImage = document.getElementById('fullscreenImage');

function openFullscreen(index) {
    currentImageIndex = index;
    fullscreenImage.src = images[currentImageIndex].src;
    fullscreenContainer.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeydown);
}

function closeFullscreen() {
    fullscreenContainer.style.display = 'none';
    document.body.style.overflow = 'auto';
    document.removeEventListener('keydown', handleKeydown);
}

function nextFullscreenSlide() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    fullscreenImage.src = images[currentImageIndex].src;
}

function prevFullscreenSlide() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    fullscreenImage.src = images[currentImageIndex].src;
}

function handleKeydown(event) {
    switch (event.key) {
        case 'ArrowRight':
            nextFullscreenSlide();
            break;
        case 'ArrowLeft':
            prevFullscreenSlide();
            break;
        case 'Escape':
            closeFullscreen();
            break;
    }
}