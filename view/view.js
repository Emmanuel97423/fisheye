

export class View {
    constructor() { }
    //List all photographers
    displayPhotographers(photographers) {
        const photographersListDOM = document.querySelector("#homeCard");
        let result = "";

        for (const photographer of photographers) {

            //Display tags array
            let tagsTemplate = ""
            let tags = photographer.tags

            for (const tag of tags) {

                tagsTemplate += `<span class="breadcrumb-item" aria-label="Navigation par tag" tabindex>#${tag}</span>`

            }

            result += `
          <div class="box__list--card aria-label="liste photographes">
            
             <a href="photographer.html?id=${photographer.id}"><img class="portrait" role="img" aria-label="Portrait du photographe" src="./img/avatar/${photographer.portrait}" alt="Vignette du photographe ${photographer.name}"></a>
                    <div class="box__list--text">

                        <a href="photographer.html?id=${photographer.id}"><h2 aria-label="Nom du photographe ${photographer.name}">${photographer.name}</h2></a>
                            <h3 aria-label="Ville du photographe: ${photographer.city}">${photographer.city}, <span id="country" aria-labelly="Ville du photographe">${photographer.country}</span></h3>
                            <p aria-label="Expression du photographe: ${photographer.tagline}">${photographer.tagline}</p>
                        <span class="box__list--price" aria-label="Tarif du photographe ${photographer.price}">${photographer.price}€/jour</span>
                        </div>
            <div class="box__list--tag" aria-label="Navigation par tag">
                ${tagsTemplate}
                

            </div>
        </div>
        `

        }

        photographersListDOM.innerHTML = result;
    }
    //Get One photographer
    displayPhotographerById(photographer) {

        const photographerDOM = document.querySelector("#photographer");
        let result = "";
        let tagsTemplate = ""
        let tags = photographer[0].tags

        // for (const tag of tags) {

        //     tagsTemplate += ` <li><span class="tag" aria-label=" tag">#${tag}</span></li>`

        // }

        tags.forEach((tag, index) => {

            tagsTemplate += ` <li><span class="tag" aria-label=" tag" tabindex="${index + 7}">#${tag}</span></li>`

        })


        result = `
            <div class="box__photographer--text">
            <h2 aria-label="Nom du photographe: ${photographer[0].name}" tabindex="2">${photographer[0].name}</h2>
            <h3 aria-label="Ville du photographe: ${photographer[0].city}" tabindex="3">${photographer[0].city}, ${photographer[0].country}</h3>
            <p aria-label="Mot du photographe" tabindex="4">${photographer[0].tagline}</p>
            <ul id ='tagsList' aria-label="Navigation par tag"       >
            
                ${tagsTemplate}

            </ul>
        </div>
        <div class="box__photographer--contact"><button class="btn btn-xl" type="button" onClick="openModalForm()" aria-label="Contactez-moi" tabindex="5" >Contactez-moi</button></div>
        <img src="/img/avatar/${photographer[0].portrait}" alt="vignette-du-photographe" aria-label="Portrait du photographe" role="img" tabindex="6">
        
        `

        photographerDOM.innerHTML = result

    }
    //List content by photographer
    displayContentById(medias, name) {
        const contentDOM = this.getElement("#content__list")
        const modalDOM = this.getElement('#modal__content')

        // const $body = $('#body')
        // const $openModalBtn = $('.open-modal-btn')
        // const $mainWrapper = $('#main-wrapper')
        // const $modal = $('.modal')
        // const $modalTitle = $('.modal-title')
        // const $modalCloseBtn = $('.modal-close-btn')



        let contentTemplate = ""
        let modalTemplate = ""



        // for (const media of medias) {


        //     if (media.image) {

        //         contentTemplate += `

        //         <div class="box__photographer--list--container">
        //               <div class="box__photographer--list--img"><img role="img" aria-label="vignette de la photo" src="./img/${name}/${media.image}" alt="${media.title}" onclick="openModal()" class="hover-shadow"></div>

        //             <div class="box__photographer--list--data">
        //                 <p aria-label="Titre du média">${media.title}</p>
        //                 <div class=likesBox aria-label="Nombre de likes"    >
        //                     <p class="likes" >${media.likes}</p>
        //                 <i class="fas fa-heart" aria-hidden=true></i>
        //                 </div>
        //         </div>
        //     </div>
        //     `

        //         modalTemplate += `
        //          <div class="mySlides" >
        //             <!--<div class="numbertext">1 / 4</div>-->
        //             <img role="img" aria-label="image agrandi"src="/img/${name}/${media.image}" >
        //         </div>

        //         `


        //     } else if (media.video) {
        //         contentTemplate += `

        //              <div class="box__photographer--list--container">
        //                 <div class="box__photographer--list--img">

        //                     <video  role="video" muted   onclick="openModal()"  aria-label = "vignette video du photographe" >
        //                     <source src="/img/${name}/${media.video}"
        //                             type="video/mp4">
        //                     Sorry, your browser doesn't support embedded videos.
        //                 </video>

        //                     </div>
        //                 <div class="box__photographer--list--data">
        //                         <p aria-label="titre-media">${media.title}</p>
        //                         <div class=likesBox>
        //                             <p class="likes" aria-label="Nombre de likes">${media.likes}</p>
        //                         <i class="fas fa-heart"></i>
        //                         </div>
        //                 </div>

        //               </div>


        //         `
        //         modalTemplate += `
        //          <div class="mySlides">
        //             <!--<div class="numbertext">1 / 4</div>-->
        //                <video  role="video" aria-label = "video du photographe" controls  muted width=100%  >
        //                     <source src="/img/${name}/${media.video}"
        //                             type="video/mp4">
        //                     Sorry, your browser doesn't support embedded videos.
        //                 </video> 
        //         </div>

        //         `
        //     }
        //     contentDOM.innerHTML = contentTemplate
        //     modalDOM.innerHTML = modalTemplate


        //     // contentDOM.innerHTML += videoTemplate

        // }

        medias.forEach((media, index) => {

            if (media.image) {

                contentTemplate += `

                <div class="box__photographer--list--container" tabindex="20">
                      <div class="box__photographer--list--img"><img role="img" aria-label="vignette de la photo" src="./img/${name}/${media.image}" alt="${media.title}" onclick="openModal()" class="hover-shadow"></div>

                    <div class="box__photographer--list--data">
                        <p aria-label="Titre du média">${media.title}</p>
                        <div class=likesBox aria-label="Nombre de likes"    >
                            <p class="likes" >${media.likes}</p>
                        <i class="fas fa-heart" aria-hidden=true></i>
                        </div>
                </div>
            </div>
            `

                modalTemplate += `
                 <div class="mySlides" >
                    <!--<div class="numbertext">1 / 4</div>-->
                    <img role="img" aria-label="image agrandi"src="/img/${name}/${media.image}" >
                </div>
                
                `


            } else if (media.video) {
                contentTemplate += `

                     <div class="box__photographer--list--container" tabindex="20">
                        <div class="box__photographer--list--img">

                            <video  role="video" muted   onclick="openModal()"  aria-label = "vignette video du photographe" >
                            <source src="/img/${name}/${media.video}"
                                    type="video/mp4">
                            Sorry, your browser doesn't support embedded videos.
                        </video>
                        
                            </div>
                        <div class="box__photographer--list--data">
                                <p aria-label="titre-media">${media.title}</p>
                                <div class=likesBox>
                                    <p class="likes" aria-label="Nombre de likes">${media.likes}</p>
                                <i class="fas fa-heart"></i>
                                </div>
                        </div>

                      </div>
        
                
                `
                modalTemplate += `
                 <div class="mySlides">
                    <!--<div class="numbertext">1 / 4</div>-->
                       <video  role="video" aria-label = "video du photographe" controls  muted width=100%  >
                            <source src="/img/${name}/${media.video}"
                                    type="video/mp4">
                            Sorry, your browser doesn't support embedded videos.
                        </video> 
                </div>
                
                `
            }
            contentDOM.innerHTML = contentTemplate
            modalDOM.innerHTML = modalTemplate
        })


    }
    //Display all like 
    displayAllLike(medias, price) {



        const likeDOM = this.getElement('#total__likes')
        const reducer = (previousValue, currentValue) => previousValue + currentValue;
        let likesArr = []
        let storage = localStorage
        let likeTemplate = ""


        medias.forEach(media => {

            likesArr.push(media.likes)

        })

        const total = likesArr.reduce(reducer)
        storage.setItem('total-like', total)

        likeTemplate = `
                 <div class="total__likes--content">
                        <div  class="total__likes--heart" aria-label="Nombre de likes total ">${storage.getItem('total-like')} <i class="fas fa-heart" aria-hidden=true></i></div>
                         <div class="total__likes--price" aria-label="Tarif">${price}€/jour</div>
                 </div>
        `


        likeDOM.innerHTML = likeTemplate


    }
    createElement(tag, className) {
        const element = document.createElement(tag)
        if (className) element.classList.add(className)

        return element
    }
    // Retrieve an element from the DOM
    getElement(selector) {
        const element = document.querySelector(selector)

        return element
    }

}

