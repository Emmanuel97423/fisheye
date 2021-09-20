// import  photographerModel from './model/photographerModel'
import Data from './model/dataModel.js'

const photographersJson = './model/photographers.json'
const mediasJson = './model/medias.json'

const photographers = new Data(photographersJson)
const medias = new Data(mediasJson)

console.log(photographers.data)
console.log(medias.data)

// const photographersData = photographers.data
// photographersData.forEach(element => { console.log(element.id) })


