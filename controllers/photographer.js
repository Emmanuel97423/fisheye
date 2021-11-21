import { View } from '../view/view.js'
import { PhotographersManager, MediasManager } from '../model/model.js'
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("id");

let photographerName = ""
let medias = {}
let price = ""

//Photographe Manager
const photoManager = new PhotographersManager()
//Affichage données d'un photographe par son id
photoManager.getDataById(id).then((result) => {

    price = result[0].price
    const homeCardView = new View();
    homeCardView.displayPhotographerById(result)

    photographerName = result[0].name.split(" ")[0]

}).catch((error) => { console.error(error) })


//Medias manager
const mediaManager = new MediasManager()
//Affichage des médias d'un photographe trier par son ID
mediaManager.getDataById(id).then((result) => {

    const mediaView = new View();

    mediaView.displayContentById(result, photographerName)
    //Affiche de tous les likes et du tarif
    mediaView.displayAllLike(result, price)

    likesInc()


}).catch((error) => {
    console.log(error)
})


// Filtrage
const select = document.getElementById('select');
select.addEventListener('change', (e) => {
    e.preventDefault();
    const mediaView = new View();
    if (e.target.value == 'popularity') {
        mediaManager.getDataByLikes(id).then((result) => {
            mediaView.displayContentById(result, photographerName)
            likesInc()

        }).catch((error) => { console.log(error) })
    } else if (e.target.value == 'date') {
        mediaManager.getDataByDate(id).then((result) => {
            mediaView.displayContentById(result, photographerName)
            likesInc()
        }).catch((error) => { console.log(error) })

    } else if (e.target.value == 'title') {
        mediaManager.getDataByTitle(id).then((result) => {
            mediaView.displayContentById(result, photographerName)
            likesInc()
        }).catch((error) => { console.log(error) })

    }

})

//Incrémentation des likes

const likesInc = () => {

    try {

        let likeBtn = document.querySelectorAll('.likes');
        let totalStorage = localStorage.getItem('total-like');
        let total = totalStorage;

        let totalLikeDOM = document.getElementById('total__like')

        likeBtn.forEach(btn => {
            let nextNode = btn.nextElementSibling
            nextNode.addEventListener('click', (e) => {
                e.preventDefault();
                btn.innerText++;
                totalLikeDOM.innerText++


            })
        })
    } catch (error) {
        console.log(error)
    }


}
likesInc()

//Navigation par tags
const storage = localStorage

setTimeout(() => {
    const tags = document.querySelectorAll('.tag')

    tags.forEach(tag => {
        tag.addEventListener('click', (e) => {
            e.preventDefault();
            storage.setItem('tagSelected', tag.innerHTML)
            window.open('./', "_self")
        })
    })
}, 2000)
