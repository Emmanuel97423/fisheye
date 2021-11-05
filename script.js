import { View } from './view/view.js'
import { PhotographersManager, MediasManager } from './model/model.js'
const storageTag = localStorage.getItem('tagSelected')


const photoManager = new PhotographersManager()
photoManager.getData().then((result) => {
    const homeCardView = new View();
    homeCardView.displayPhotographers(result)
})

if (storageTag) {
    const photographerView = new View();


    photoManager.getDataByTags(storageTag).then((result) => {
        console.log('result:', result)
        photographerView.displayPhotographers(result)
        // window.open('./index.html', "_self")
        localStorage.removeItem('tagSelected')

    }).catch((error) => { console.log(error) })
}

//Filter by tag
setInterval(() => {
    const tags = document.querySelectorAll('span')
    for (const tag of tags) {
        tag.addEventListener('click', (e) => {
            e.preventDefault();
            const photographerView = new View();


            photoManager.getDataByTags(tag.innerHTML).then((result) => {

                photographerView.displayPhotographers(result)
                // window.open('./index.html', "_self")


            }).catch((error) => { console.log(error) })

        })

    }
}, 2000)






