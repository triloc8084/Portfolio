const overlay = document.getElementById("overlay");

hamburger.addEventListener("click",()=>{
 hamburger.classList.toggle("active");
 navLinks.classList.toggle("active");
 overlay.classList.toggle("active");
});

overlay.addEventListener("click",()=>{
 hamburger.classList.remove("active");
 navLinks.classList.remove("active");
 overlay.classList.remove("active");
});


