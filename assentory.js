let buttonSubmit = document.getElementById("btn-submit");
let btnDemo = document.getElementById("btn-demo");
let mod = document.getElementById("mod");
const form = document.getElementById("form");
let formContent = document.getElementById("form-content");


function checkEmail(input) {
   const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 
   if (re.test(input.value.trim())) {
     showSuccess(input);
   } else {
     showErrorMessage(input, "Please enter a valid email address");
   }
 }

let closeMode = document.getElementsByClassName("close-mode") [0];

closeMode.onclick = function() { 
  mod.style.display = "none";
  nav.style.display = "block";
  modal.style.display = "none"
}

form.addEventListener("submit", function(e) {
   e.preventDefault();
 
   checkEmail(email);
 })

btnDemo.addEventListener("click", function() {
   mod.style.display = "flex"
   nav.style.display = "none"
   // formContent.style.display = "flex"
   form.style.display = "block"
})



//assentory script
let slides = document.getElementsByClassName("my-slide")
let dottings = document.getElementsByClassName("dot")

let slideIndex = 1;
showSlides(slideIndex)

function plusSlide(n) {
  showSlides(slideIndex += n)
}

function currentSlide(n) {
  showSlides(slideIndex = n)
}

function showSlides(n) {
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }

  // looping through slides 
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
  }

  // looping through dots 
  for (let i = 0; i < dottings.length; i++) {
    dottings[i].className = dottings[i].className.replace(" active", "")
  }

  slides[slideIndex-1].style.display = "block"
  dottings[slideIndex-1].className += "active"
}

// event listeners 
// dottings.addEventListener("click", function(){
//   showSlides(n)
// })