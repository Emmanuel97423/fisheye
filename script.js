import { View } from './view/view.js'
import { PhotographersManager, MediasManager } from './model/model.js'
const storageTag = localStorage.getItem('tagSelected')

//Affichage de tous les photographes et leurs données
const photoManager = new PhotographersManager()
photoManager.getData().then((result) => {
    const homeCardView = new View();
    homeCardView.displayPhotographers(result)
})
//Si Filtrage par tags
if (storageTag) {
    const photographerView = new View();

    photoManager.getDataByTags(storageTag).then((result) => {
        photographerView.displayPhotographers(result)
        localStorage.removeItem('tagSelected')

    }).catch((error) => { console.log(error) })
}

//Filtrage par tags
setInterval(() => {
    const tags = document.querySelectorAll('span')
    for (const tag of tags) {
        tag.addEventListener('click', (e) => {
            e.preventDefault();
            const photographerView = new View();

            photoManager.getDataByTags(tag.innerHTML).then((result) => {

                photographerView.displayPhotographers(result)


            }).catch((error) => { console.log(error) })

        })

        tag.addEventListener('keydown', (e) => {
            e.preventDefault();
            const photographerView = new View();

            if (e.key == 'Enter') {
                photoManager.getDataByTags(tag.innerHTML).then((result) => {

                    photographerView.displayPhotographers(result)


                }).catch((error) => { console.log(error) })

            } else if (e.key == 'Tab') {
                if (tag.offsetParent.nextElementSibling == null) {
                    tag.blur()
                } else { tag.offsetParent.nextElementSibling.childNodes[0].focus() }
            } else if (e.key == 'Shift+Tab') {
                if (tag.offsetParent.previousElementSibling == null) {
                    tag.blur()
                } else { tag.offsetParent.previousElementSibling.childNodes[0].focus() }
            }
        })

    }
}, 0)


const span = document.querySelectorAll('span')
span.forEach(el => {
    el.addEventListener('click', (e) => {
        e.preventDefault()
        e.target.focus()
        // e.target.style.border = 'solid 1px black'
    })

})


