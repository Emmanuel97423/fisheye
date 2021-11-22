
setTimeout(() => {
    const tagDOM = document.querySelectorAll('.tag')

    tagDOM.forEach(tag => {
        tag.addEventListener("keydown", (event) => {
            // if (event.defaultPrevented) {
            //     return; // Ne devrait rien faire si l'événement de la touche était déjà consommé.
            // }
            let element = document.activeElement;

            switch (event.key) {

                case "ArrowDown":
                    // Faire quelque chose pour la touche "flèche vers le bas" pressée.
                    console.log("Arrow down")
                    element.click()
                    break;
                case "ArrowUp":
                    // Faire quelque chose pour la touche "up arrow" pressée.
                    break;
                case "ArrowLeft":
                    // Faire quelque chose pour la touche "left arrow" pressée.
                    break;
                case "ArrowRight":
                    // Faire quelque chose pour la touche "right arrow" pressée.
                    break;
                case "Enter":
                    // Faire quelque chose pour les touches "enter" ou "return" pressées.
                    // element = document.activeElement

                    element.click()

                    break;
                case " ":
                    // Faire quelque chose pour les touches "espace" .
                    // element = document.activeElement
                    element.click()

                    break;
                case "Escape":
                    // Faire quelque chose pour la touche "esc" pressée.
                    // element.click()

                    break;
                default:
                    return; // Quitter lorsque cela ne gère pas l'événement touche.
            }

            // Annuler l'action par défaut pour éviter qu'elle ne soit traitée deux fois.
            event.preventDefault();
        }, true);

    })

}, 2000)



setTimeout(() => {

    const imgDOM = document.querySelectorAll('.img')

    imgDOM.forEach(img => {
        img.addEventListener("keydown", (event) => {
            // if (event.defaultPrevented) {
            //     return; // Ne devrait rien faire si l'événement de la touche était déjà consommé.
            // }
            let element = document.activeElement;

            switch (event.key) {

                case "ArrowDown":
                    // Faire quelque chose pour la touche "flèche vers le bas" pressée.

                    element.click()
                    break;
                case "ArrowUp":
                    // Faire quelque chose pour la touche "up arrow" pressée.
                    break;
                case "ArrowLeft":
                    // Faire quelque chose pour la touche "left arrow" pressée.
                    break;
                case "ArrowRight":
                    // Faire quelque chose pour la touche "right arrow" pressée.
                    break;
                case "Enter":
                    // Faire quelque chose pour les touches "enter" ou "return" pressées.

                    console.log('element:', element)

                    element.click()

                    break;
                case " ":
                    // Faire quelque chose pour les touches "espace" .
                    // element = document.activeElement
                    element.click()

                    break;
                case "Escape":
                    // Faire quelque chose pour la touche "esc" pressée.
                    // element.click()

                    break;
                default:
                    return; // Quitter lorsque cela ne gère pas l'événement touche.
            }

            // Annuler l'action par défaut pour éviter qu'elle ne soit traitée deux fois.
            event.preventDefault();
        }, true);
    })
}, 2000)



setTimeout(() => {
    const likeDOM = document.querySelectorAll('.fa-heart')
    likeDOM.forEach(like => {
        like.addEventListener("keydown", (event) => {
            // event.stopPropagation();             
            // if (event.defaultPrevented) {
            //     return; // Ne devrait rien faire si l'événement de la touche était déjà consommé.
            // }
            let element = document.activeElement;

            switch (event.key) {

                case "ArrowDown":
                    // Faire quelque chose pour la touche "flèche vers le bas" pressée.

                    element.click()
                    break;
                case "ArrowUp":
                    // Faire quelque chose pour la touche "up arrow" pressée.
                    break;
                case "ArrowLeft":
                    // Faire quelque chose pour la touche "left arrow" pressée.
                    break;
                case "ArrowRight":
                    // Faire quelque chose pour la touche "right arrow" pressée.
                    break;
                case "Enter":
                    // Faire quelque chose pour les touches "enter" ou "return" pressées.
                    // element = document.activeElement

                    element.click()

                    break;
                case " ":
                    // Faire quelque chose pour les touches "espace" .
                    // element = document.activeElement
                    // element.click()

                    break;
                case "Escape":
                    // Faire quelque chose pour la touche "esc" pressée.
                    // element.click()

                    break;
                default:
                    return; // Quitter lorsque cela ne gère pas l'événement touche.
            }

            // Annuler l'action par défaut pour éviter qu'elle ne soit traitée deux fois.
            event.preventDefault();
        }, true);
    })
}, 2000)




