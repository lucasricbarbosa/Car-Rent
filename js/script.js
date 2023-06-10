var smallImage = './assets/home-cars-small.png';
var normalImage = './assets/home-image.png';

var image;

var larguraJanela = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

if (larguraJanela <= 768) {
  image = smallImage;
} else if (larguraJanela > 768) {
    image = normalImage;
} else {
    image = normalImage;
}

var imageElement = document.querySelector('#home-image');
imageElement.src = image;

let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

document.querySelector('#login-btn').onclick = () => {
    document.querySelector('.login-form-container').classList.toggle('active')
}

document.querySelector('#close-login-form').onclick = () => {
    document.querySelector('.login-form-container').classList.remove('active')
}

window.onscroll = () => {
    if (window.scrollY > 0) {
        document.querySelector(".header").classList.add("active")
    } else {
        document.querySelector(".header").classList.remove("active")
    }

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

window.onload = () => {
    if (window.scrollY > 0) {
        document.querySelector(".header").classList.add("active")
    } else {
        document.querySelector(".header").classList.remove("active")
    }
}

var swiper = new Swiper(".vehicles-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".featured-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".reviews-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    grabCursor: true,
    centeredSlides:true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});
