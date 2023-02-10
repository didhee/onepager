let modal = document.getElementById("myModal");
let nav = document.getElementById("nav");
let images = document.getElementsByClassName("myImg");
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");
let blur = document.getElementById("blur-bg");
const getEmail = document.getElementById("email");
const form = document.getElementById("form");
// const button = document.getElementsByClassName("btn-send")
const btnDemo = document.getElementById("btn-demo");
let mod = document.getElementById("mod");
// let closeMode = document.getElementsByClassName("close")
let formContent = document.getElementById("form-content");

//show error message
function showErrorMessage(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";

  const small = document.getElementsByClassName("small");
  small.innerText = message;
}

//show success 
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

//check for email validation 
function checkEmail(input) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showErrorMessage(input, "Please enter a valid email address");
  }
}

//loop through images
for (let i = 0; i < images.length; i++) {
   let img = images[i];

   img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.style = modalImg.classList.add("img-border-radius")
    captionText.innerHTML = this.alt;
    nav.style.display = "none";
   }
}

//close icon
let span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal.style.display = "none"
  nav.style.display = "block"
  mod.style.display = "none"
  // form.style.display = "none"
  // formContent.style.display = "none"
}

let closeMode = document.getElementsByClassName("close-mode") [0];

closeMode.onclick = function() { 
  mod.style.display = "none";
  nav.style.display = "block";
  modal.style.display = "none"
}

//event handlers
form.addEventListener("submit", function(e) {
  e.preventDefault();

  checkEmail(email);
})

  // button.addEventListener("click", function (e) {
  //   e.preventDefault();

  //   checkEmail(email);
  // })

  // function togglePopup() {
  //   document.getElementById("mod").classList.toggle("active");
  //  }

  btnDemo.addEventListener("click", function() {
    mod.style.display = "flex"
    nav.style.display = "none"
    // formContent.style.display = "flex"
    form.style.display = "block"
  })