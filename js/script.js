const burger = document.querySelector('.burger');
const nav = document.querySelector('.mobile-nav');
const navLinks = document.querySelectorAll('.btn');


burger.addEventListener('click', navSlide)

function navSlide () {
  burger.classList.toggle('toggle');
  nav.classList.toggle('nav-active');
  navLinks.forEach((link, index)=> {
      link.style.animation = `navLinkFade 0.4s ease forwards ${index / 7 + 1.2}s`;
      link.addEventListener( 'click', function(){
        nav.classList.remove('nav-active');
        burger.classList.remove('toggle');
      })
  })
}


let toTopButton = document.getElementById("toTopButton");



window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    toTopButton.style.display = "block";
  
  } else {
    toTopButton.style.display = "none";
    
  }
  

}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
