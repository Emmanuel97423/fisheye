// import  photographerModel from './model/photographerModel'
// import { Photographers, Medias } from './model/FetchDatas.js'
import { Photographers } from './model/Photographers.js'
import { Medias } from './model/Medias.js'
import { View } from './view/homeCard.js'


const url = './model/data.json'


const photographer = new Photographers(url)

// const media = new Medias(url)

// photographer.data

const homeCard = new View(photographer.data)
console.log('homeCard:', homeCard)






