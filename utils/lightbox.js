// Open the Modal
const openModal = () => {
    document.getElementById("myModal").style.display = "block";
}

// Close the Modal
const closeModal = () => {
    document.getElementById("myModal").style.display = "none";
}

const showSlides = async (n) => {
    setTimeout(() => {
        let i;
        let slides = document.querySelectorAll(".mySlides");
        // console.log('slides:', slides.length)


        slides.forEach((slide, index) => {


            slide.addEventListener

        })

        // var dots = document.getElementsByClassName("demo");
        // let captionText = document.getElementById("caption");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        // for (i = 0; i < dots.length; i++) {
        //     dots[i].className = dots[i].className.replace(" active", "");
        // }
        slides[slideIndex - 1].style.display = "block";
        // dots[slideIndex - 1].className += " active";
        // captionText.innerHTML = dots[slideIndex - 1].alt;
    }, 2000)
}

let slideIndex = 3;
showSlides(slideIndex);

// Next/previous controls
const plusSlides = (n) => {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
const currentSlide = (n) => {
    showSlides(slideIndex = n);
}



//keyboard event
window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
        return; // Ne devrait rien faire si l'événement de la touche était déjà consommé.
    }

    switch (event.key) {
        case "ArrowDown":
            // Faire quelque chose pour la touche "flèche vers le bas" pressée.
            break;
        case "ArrowUp":
            // Faire quelque chose pour la touche "up arrow" pressée.
            break;
        case "ArrowLeft":
            // Faire quelque chose pour la touche "left arrow" pressée.
            plusSlides(-1)
            break;
        case "ArrowRight":
            // Faire quelque chose pour la touche "right arrow" pressée.
            plusSlides(+1)
            break;
        case "Enter":
            // Faire quelque chose pour les touches "enter" ou "return" pressées.
            break;
        case "Escape":
            // Faire quelque chose pour la touche "esc" pressée.
            closeModal()
            break;
        default:
            return; // Quitter lorsque cela ne gère pas l'événement touche.
    }

    // Annuler l'action par défaut pour éviter qu'elle ne soit traitée deux fois.
    event.preventDefault();
}, true);