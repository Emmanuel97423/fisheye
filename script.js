// import  photographerModel from './model/photographerModel'
import { FetchData, Photographer } from './controllers/dataController.js'


const data = './model/data.json'


const dataPhotographer = new FetchData(data)
console.log('dataPhotographer:', dataPhotographer.data)
