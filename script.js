let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 3000); // Muda a imagem a cada 3 segundos
}

function plusSlides(n) {
    slideIndex += n;
    if (slideIndex < 1) {slideIndex = slides.length;}
    if (slideIndex > slides.length) {slideIndex = 1;}
    showSlides();
}

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    if (slideIndex > slides.length) {slideIndex = 1}
    if (slideIndex < 1) {slideIndex = slides.length}
    slides[slideIndex-1].style.display = "block"; 
}

setInterval(() => {
    plusSlides(1);
}, 3000);
