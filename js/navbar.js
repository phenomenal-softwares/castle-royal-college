let nav = document.querySelector('.navbar-nav');
let menuToggle = document.querySelector('.navbar-toggler-menu');
menuToggle.addEventListener("click", function(){
  nav.classList.toggle("mobile-nav");
  this.classList.toggle("is-active");
});
function closeBar() {
  nav.classList.toggle("mobile-nav");
  menuToggle.classList.toggle("is-active");
}