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

    }
}, 2000)






