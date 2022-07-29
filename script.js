// ====== ======>> Nav Background Change on Scroll <<====== ======
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 100) navbar.classList.add('scrollNavbar');
  else navbar.classList.remove('scrollNavbar');
});

// ====== ======>> Active Link on Section Scroll <<====== ======
const section = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  const scrollY = window.pageYOffset;

  section.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.navList a[href*=' + sectionId + ']')
        .classList.add('active');
    } else {
      document
        .querySelector('.navList a[href*=' + sectionId + ']')
        .classList.remove('active');
    }
  });
});

// ====== ======>> Swiper Js <<====== ======
var swiper = new Swiper('.mySwiper', {
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
    clickable: true,
  },
});

// ====== ======>> Nav Toggle <<====== ======
const toggleBtn = document.querySelector('.navToggleBtn'),
  navbar = document.querySelector('.navList');

toggleBtn.addEventListener('click', () => {
  navbar.classList.toggle('activeNavbar');
});

// ====== ======>> REMOVE NAVMENU ON LINK ACTION <<====== ======
const navLink = document.querySelectorAll('.navLink');

navLink.forEach((n) =>
  n.addEventListener('click', () => {
    const navbar = document.querySelector('.navList');
    navbar.classList.remove('activeNavbar');
  })
);

// ====== ======>> SHOW SCROLL UP BUTTON <<====== ======
const scrollUp = document.querySelector('.scroll_up');

window.addEventListener('scroll', () => {
  // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 100) scrollUp.classList.add('show_scroll');
  else scrollUp.classList.remove('show_scroll');
});

// ====== ======>> SCROLL REVEAL ANIMATION <<====== ======
const scrollRevealAnime = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 2000,
  reset: true,
});

scrollRevealAnime.reveal(
  `.home_img, .feature__cards, 
   .service_content, .menu_card,
   .home_content, .signup, .footer_card, 
   .copyright_content`,
  {
    interval: 200,
  }
);
