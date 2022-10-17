
let fixed = document.querySelector('.header-nav')

window.addEventListener('scroll', function (e) {
 let scrollPosition = window.scrollY;

  if (scrollPosition > 250) {
    fixed.classList.add('header-nav_fixed')
  } else {
    fixed.classList.remove('header-nav_fixed')
  }
});
