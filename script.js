import { View } from './view/view.js'
import { PhotographersManager, MediasManager } from './model/model.js'

const photoManager = new PhotographersManager()
photoManager.getData().then((result) => {
    const homeCardView = new View();
    homeCardView.displayPhotographers(result)
})





