import { View } from '../view/view.js'
import { PhotographersManager, MediasManager } from '../model/model.js'
// import { Filter } from '../utils/filter.js'
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("id");

//Photographe name for media link
let photographerName = ""
let medias = {}

let price = ""

//Photographer Manager
const photoManager = new PhotographersManager()
photoManager.getDataById(id).then((result) => {

    price = result[0].price
    const homeCardView = new View();
    homeCardView.displayPhotographerById(result)

    photographerName = result[0].name.split(" ")[0]

}).catch((error) => { console.error(error) })


//Media manager
const mediaManager = new MediasManager()
mediaManager.getDataById(id).then((result) => {

    const mediaView = new View();

    mediaView.displayContentById(result, photographerName)
    //display all likes
    mediaView.displayAllLike(result, price)
    //display price
    likesInc()
    // mediaView.displayVideoById(result, photographerName)

}).catch((error) => {
    console.log(error)
})


// Filter
const select = document.getElementById('select');
select.addEventListener('change', (e) => {
    e.preventDefault();
    const mediaView = new View();
    if (e.target.value == 'popularity') {
        mediaManager.getDataByLikes(id).then((result) => {
            mediaView.displayContentById(result, photographerName)
            likesInc()
            // mediaView.displayVideoById(result, photographerName)
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

//Likes System

const likesInc = () => {

    try {

        let likeBtn = document.querySelectorAll('.likes')

        likeBtn.forEach(btn => {
            let nextNode = btn.nextElementSibling
            nextNode.addEventListener('click', (e) => {
                e.preventDefault();
                btn.innerText++
            })
        })
    } catch (error) {
        console.log(error)
    }


}
likesInc()

//Total like


// const likes = new MediasManager()


const storage = localStorage

setTimeout(() => {
    const tags = document.querySelectorAll('.tag')

    tags.forEach(tag => {
        tag.addEventListener('click', (e) => {
            e.preventDefault();
            storage.setItem('tagSelected', tag.innerHTML)
            window.open('./index.html', "_self")
        })
    })
}, 2000)

// const tags = document.querySelectorAll('span')
// for (const tag of tags) {
//     tag.addEventListener('click', (e) => {
//         e.preventDefault();
//         const photographerView = new View();


//         photoManager.getDataByTags(tag.innerHTML).then((result) => {
//             console.log('result:', result)
//             photographerView.displayPhotographers(result)
//             // window.open('./index.html', "_self")


//         }).catch((error) => { console.log(error) })

//     })

// }