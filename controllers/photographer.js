import { View } from '../view/view.js'
import { PhotographersManager, MediasManager } from '../model/model.js'
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("id");

let photographerName = ""
let medias = {}
let price = ""

//Photographes Manager
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


const options = document.querySelectorAll('.select')
options.forEach(option => {

    option.addEventListener('click', (e) => {
        e.preventDefault()
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

})

// Filtrage
// const select = document.getElementById('select');
// select.addEventListener('change', (e) => {
//     e.preventDefault();
//     const mediaView = new View();
//     if (e.target.value == 'popularity') {
//         mediaManager.getDataByLikes(id).then((result) => {
//             mediaView.displayContentById(result, photographerName)
//             likesInc()

//         }).catch((error) => { console.log(error) })
//     } else if (e.target.value == 'date') {
//         mediaManager.getDataByDate(id).then((result) => {
//             mediaView.displayContentById(result, photographerName)
//             likesInc()
//         }).catch((error) => { console.log(error) })

//     } else if (e.target.value == 'title') {
//         mediaManager.getDataByTitle(id).then((result) => {
//             mediaView.displayContentById(result, photographerName)
//             likesInc()
//         }).catch((error) => { console.log(error) })

//     }

// })

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
        likeBtn.forEach(btn => {
            let nextNode = btn.nextElementSibling
            nextNode.addEventListener('keydown', (e) => {
                e.preventDefault();

                if (e.key == 'Enter') {
                    btn.innerText++;
                    totalLikeDOM.innerText++
                } else if (e.key == 'Tab')
                    if (nextNode.offsetParent.nextElementSibling == null) {
                        nextNode.blur()
                    } else { nextNode.offsetParent.nextElementSibling.childNodes[0].focus() }

                else if (e.key == 'Shift+Tab') {
                    if (nextNode.offsetParent.previousElementSibling == null) {
                        nextNode.blur()
                    } else { nextNode.offsetParent.previousElementSibling.childNodes[0].focus() }
                }
            })
        })
    } catch (error) {
        console.log(error)
    }


}
likesInc()

//Navigation par tags
const storage = localStorage

setInterval(() => {
    const tags = document.querySelectorAll('.tag')


    tags.forEach(tag => {
        tag.addEventListener('click', (e) => {
            e.preventDefault();
            storage.setItem('tagSelected', tag.innerHTML)
            window.open('./', "_self")
        })
        tag.addEventListener('keydown', (e) => {
            e.preventDefault();
            if (e.key == 'Enter') {
                storage.setItem('tagSelected', tag.innerHTML)
                window.open('./', "_self")
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
    })
}, 2000)

// $(document).on('click', '.dropdown-menu label', function (e) {
//     e.stopPropagation();
// });