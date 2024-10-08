document.querySelector('.slider_section').style.backgroundImage = 'url(background/sslbg4.jpg)';
setInterval(changeImage, 5000);

function changeImage() {
  let windowWidth = window.innerWidth;
   var BackgroundImg=["classmates/f5.jpeg",
 "classmates/f3.jpeg", "background/slbg3.jpg", "background/slbg4.jpg", "background/slbg5.jpg", "background/slbg6.jpg", "background/slbg7.jpg", "background/slbg8.jpg", "classmates/f1.jpeg", "classmates/m1.jpeg"
  ];
   let smallScreenImg = ["classmates/f5.jpeg",
 "classmates/f3.jpeg", "background/sslbg3.jpg", "background/sslbg4.jpg", "background/sslbg5.jpg", "background/sslbg6.jpg", "background/sslbg7.jpg", "background/sslbg8.jpg", "classmates/f1.jpeg", "classmates/m1.jpeg"
  ];
   var i = Math.floor((Math.random() * 4));
 if (windowWidth < 500) {
   document.querySelector('.slider_section').style.backgroundImage = 'url("' + smallScreenImg[i] + '")';
 } else {
   document.querySelector('.slider_section').style.backgroundImage = 'url("' + BackgroundImg[i] + '")';
 }
    }
    
// Create an Intersection Observer instance
let observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
});

// Observe all sections with the 'fade-anim' class
document.querySelectorAll('.fade-anim').forEach(section => {
  observer.observe(section);
});