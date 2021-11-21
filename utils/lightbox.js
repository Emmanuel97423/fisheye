
let slideIndex = null;

// Ouvre la modal 
const openModal = () => {

    document.getElementById("myModal").style.display = "block";
    document.querySelectorAll(".box__photographer--list--container").forEach((slide, index) => {

        slide.addEventListener('click', (e) => {
            e.preventDefault();
            slideIndex = index;
        })

    })

}

// Ferme la modal
const closeModal = () => {
    document.getElementById("myModal").style.display = "none";
}

//Affiche la photo cliquée

const showSlides = async (n) => {
    setTimeout(() => {
        let i;

        const slides = document.querySelectorAll(".mySlides");
        setInterval(() => {

            slides.forEach((slide, index) => {
                slide.addEventListener('click', (e) => {
                    e.preventDefault();
                    slideIndex = index
                    // slide.style.display = "block"
                })

            })
        }, 2000)
        // var dots = document.getElementsByClassName("demo");
        // let captionText = document.getElementById("caption");


        if (n > slides.length - 1) { slideIndex = 0 }
        if (n < 0) { slideIndex = slides.length - 1 }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        // for (i = 0; i < dots.length; i++) {
        //     dots[i].className = dots[i].className.replace(" active", "");
        // }

        slides[slideIndex].style.display = "block";


        // dots[slideIndex - 1].className += " active";
        // captionText.innerHTML = dots[slideIndex - 1].alt;
    }, 2000)
}




// Navigation lightbox
const plusSlides = (n) => {
    showSlides(slideIndex += n);
}


setInterval(() => {
    const currentSlideDOM = document.querySelectorAll(".box__photographer--list--img")


    currentSlideDOM.forEach((slide, index) => {

        slide.addEventListener('click', (e) => {
            e.preventDefault();

            showSlides(index)
        })

    })
}, 1000)





//Navigation clavier
window.addEventListener("keydown", (event) => {
    // if (event.defaultPrevented) {
    //     return; 
    // Ne devrait rien faire si l'événement de la touche était déjà consommé.
    // }

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