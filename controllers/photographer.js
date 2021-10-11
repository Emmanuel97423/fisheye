import { View } from '../view/view.js'
import { PhotographersManager, MediasManager } from '../model/model.js'
// import { Filter } from '../utils/filter.js'
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("id");

//Photographe name for media link
let photographerName = ""
let medias = {}
//Photographer Manager
const photoManager = new PhotographersManager()
photoManager.getDataById(id).then((result) => {

    const homeCardView = new View();
    homeCardView.displayPhotographerById(result)

    photographerName = result[0].name.split(" ")[0]

}).catch((error) => { console.error(error) })


//Media manager
const mediaManager = new MediasManager()
mediaManager.getDataById(id).then((result) => {

    const mediaView = new View();

    mediaView.displayContentById(result, photographerName)
    mediaView.displayVideoById(result, photographerName)

}).catch((error) => {
    console.log(error)
})

const selectBox = document.getElementById('select')

// const filter = new Filter()

// const filter = (selectBox) => {
//     let value = selectBox.value
//     console.log('value:', value)
// }

// const selectValue = selectBox.options[selectBox.selectIndex].
// console.log('selectValue:', selectValue)
