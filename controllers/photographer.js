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
            // mediaView.displayVideoById(result, photographerName)
        }).catch((error) => { console.log(error) })
    } else if (e.target.value == 'date') {
        mediaManager.getDataByDate(id).then((result) => { mediaView.displayContentById(result, photographerName) }).catch((error) => { console.log(error) })
    } else if (e.target.value == 'title') {
        mediaManager.getDataByTitle(id).then((result) => { mediaView.displayContentById(result, photographerName) }).catch((error) => { console.log(error) })
    }

})

//Likes




setTimeout(() => {


    try {
        let likeBtn = document.querySelectorAll('.likesBox')


        likeBtn.forEach(like => {


            like.addEventListener('click', (e) => {

                e.preventDefault();
                let template = `
                            <p class="likes" aria-label="likes">${like.textContent++}</p>
                        <i class="fas fa-heart"></i>
                        `
                // let count =
                // console.log('count:', count)
                likeBtn.innerHTML += template


                // let parseLikes = parseInt(count)
                // console.log('parseLikes:', parseLikes++)

            })
        })

    } catch (error) {
        console.log(error)
    }

}, 3000)


// for (const like of likeBtn) {
//     like.addEventListener('click', (e) => {
//         e.preventDefault();
//         const count = document.querySelectorAll('.likes')
//         console.log('count:', count)
//         console.log('likeBtn:', likeBtn)
//     })
// }


const likes = new MediasManager()
// likes.getLikes().then((result) => console.log(result)).catch((error) => { console.log(error) })


//Filter by tags Home

// const tags = new Promise((resolve, reject) => {
//     const element = document.querySelectorAll('tag')
//     setTimeout(() => {

//         resolve(element)
//     }, 3000)

// }).then((result) => {
//     console.log(result)
// }).catch((err) => { console.log(err) });

// console.log('tags:', tags)

const storage = localStorage


setTimeout(() => {
    const tags = document.querySelectorAll('.tag')
    console.log('tags:', tags)
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