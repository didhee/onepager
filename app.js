let modal = document.getElementById("myModal");
let nav = document.getElementById("nav");
let images = document.getElementsByClassName("myImg");
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");
let blur = document.getElementById("blur-bg");


for (let i = 0; i < images.length; i++) {
   let img = images[i];

   img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    nav.style.display = "none";
   }
}

let span = document.getElementsByClassName("close")[0];


span.onclick = function() { 
  modal.style.display = "none"
  nav.style.display = "block"
}