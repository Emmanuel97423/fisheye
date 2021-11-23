

let slideIndex = null;
//Action clavier
// window.addEventListener("load", (event) => {
//     event.preventDefault();
//     console.log("DOM entièrement chargé et analysé");
//     const imgDOM = document.querySelectorAll('.img')
//     //Affiche la photo cliquée
//     setInterval(() => {

//         imgDOM.forEach((img, index) => {

//             img.addEventListener('keydown', (e) => {
//                 e.preventDefault()
//                 if (e.key == 'Enter') {
//                     openModal()
//                     showSlides(index)
//                 } else if (e.key == 'Tab') {
//                     if (img.offsetParent.nextElementSibling == null) {
//                         img.blur()
//                     } else { img.offsetParent.nextElementSibling.childNodes[0].focus() }
//                 } else if (e.key == 'Shift+Tab') {
//                     if (img.offsetParent.previousElementSibling == null) {
//                         img.blur()
//                     } else { img.offsetParent.previousElementSibling.childNodes[0].focus() }
//                 }
//             })

//         })
//     }, 1000)
// });

// const currentSlideDOM = document.querySelectorAll(".box__photographer--list--img")
// if (currentSlideDOM) {
//     currentSlideDOM.forEach((slide, index) => {

//         slide.addEventListener('click', (e) => {
//             console.log('Hello currentSlideDOM')
//             e.preventDefault();

//             showSlides(index)
//         })

//     })
// } else {
//     console.log('Cuurent slide DOM not found')
// }


//OUvre slide courant
const showSlides = (n) => {


    let i;

    const slides = document.querySelectorAll(".mySlides");
    console.log('slides lenght:', slides.length)
    // const imagesDOM = document.querySelectorAll(".img")


    // slides.forEach((slide, index) => {
    //     slide.addEventListener('click', (e) => {
    //         e.preventDefault();
    //         slideIndex = index
    //         // slide.style.display = "block"
    //     })

    // })

    // imagesDOM.forEach((slide, index) => {

    //     slide.addEventListener('keydown', (e) => {

    //         e.preventDefault();
    //         if (e.key == 'Enter') {
    //             // openModal()
    //             slideIndex = index
    //         }

    //         // slide.style.display = "block"
    //     })

    // })



    // var dots = document.getElementsByClassName("demo");
    // let captionText = document.getElementById("caption");



    console.log('n:', n)
    if (n > slides.length - 1) {
        console.log('slideIndex:', slideIndex);
        slideIndex = 0
    }

    else if (n < 0) {
        slideIndex = slides.length - 1
        console.log('slideIndex :', slideIndex)
    } else if (n > 0) {
        slideIndex = n
        console.log('slideIndex:', slideIndex)
    } else { slideIndex = 0 }
    // if (n > slides.length - 1) { slideIndex = 0 }
    // if (n < 0) { slideIndex = slides.length - 1 }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";

    }
    // for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    // }

    slides[slideIndex].style.display = "block";



    // dots[slideIndex - 1].className += " active";
    // captionText.innerHTML = dots[slideIndex - 1].alt;


}
// Ouvre la modal 
const openModal = () => {

    document.getElementById("myModal").style.display = "block";
    document.querySelectorAll(".box__photographer--list--container").forEach((slide, index) => {

        slide.addEventListener('click', (e) => {
            e.preventDefault();
            slideIndex = index;
            showSlides(index)
        })
    })
}


//Clavier
const keyBoardOpenModal = () => {
    document.querySelectorAll('.img').forEach((img, index) => {
        img.addEventListener('keydown', (e) => {
            e.preventDefault();


            if (e.key == 'Enter') {
                openModal()

                showSlides(index)

            } else if (e.key == 'Tab') {
                if (img.offsetParent.nextElementSibling == null) {
                    img.blur()
                } else { img.offsetParent.nextElementSibling.childNodes[0].focus() }
            } else if (e.key == 'Shift+Tab') {
                if (img.offsetParent.previousElementSibling == null) {
                    img.blur()
                } else { img.offsetParent.previousElementSibling.childNodes[0].focus() }
            }
        })


    })
}
setInterval(() => {
    keyBoardOpenModal()

}, 1000)


// Ferme la modal
const closeModal = () => {
    document.getElementById("myModal").style.display = "none";
}


// Navigation lightbox
const plusSlides = (n) => {
    showSlides(slideIndex += n);
}








// //Navigation clavier
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
        // case "Enter":
        //     // Faire quelque chose pour les touches "enter" ou "return" pressées.
        //     break;
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