// Slide homepage

function showSlideHomepage(index) {
    let slides = document.getElementsByClassName('slide-index');
    let dots = document.getElementsByClassName('index-dot');

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[index - 1].style.display = "block";  
    dots[index - 1].className += " active";
}

showSlideHomepage(1)
