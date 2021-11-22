

export class View {
    constructor() { }
    //Liste tous les photographes
    displayPhotographers(photographers) {
        const photographersListDOM = document.querySelector("#homeCard");
        let result = "";

        for (const photographer of photographers) {

            //Display tags array
            let tagsTemplate = ""
            let tags = photographer.tags

            for (const tag of tags) {

                tagsTemplate += `<span class="breadcrumb-item" aria-label="Navigation par tag" tabindex="0">#${tag}</span>`

            }

            result += `
          <div class="box__list--card aria-label="liste photographes">
            
             <img class="portrait" role="img" aria-label="Portrait du photographe" src="./img/avatar/${photographer.portrait}" alt="">
                    <div class="box__list--text">

                        <a href="photographer.html?id=${photographer.id}"><h2 aria-label="Nom du photographe ${photographer.name}">${photographer.name}</h2></a>
                            <h3 aria-label="Ville du photographe: ${photographer.city}" tabindex="0">${photographer.city}, <span class=font__size--13  id="country" aria-label="Ville du photographe">${photographer.country}</span></h3>
                            <p aria-label="Expression du photographe: ${photographer.tagline}" tabindex="0">${photographer.tagline}</p>
                        <p class="box__list--price" aria-label="Tarif du photographe ${photographer.price}" tabindex="0">${photographer.price}€/jour</p>
                        </div>
            <div class="box__list--tag" aria-label="Navigation par tag">
                ${tagsTemplate}
                

            </div>
        </div>
        `

        }

        photographersListDOM.innerHTML = result;
    }
    //Filtre un photographe par son id
    displayPhotographerById(photographer) {

        const photographerDOM = document.querySelector("#photographer");
        let result = "";
        let tagsTemplate = ""
        let tags = photographer[0].tags



        tags.forEach((tag, index) => {

            tagsTemplate += ` <li><span class="tag" aria-label=" tag" tabindex="0">#${tag}</span></li>`

        })


        result = `
            <div class="box__photographer--text">
            <h1 class=box__photographer--title aria-label="Nom du photographe: ${photographer[0].name}." tabindex="0">${photographer[0].name}</h1>
            <h2 aria-label="Ville du photographe: ${photographer[0].city}, ${photographer[0].country}." tabindex="0">${photographer[0].city}, ${photographer[0].country}</h2>
            <p aria-label="Mot du photographe" tabindex="0">${photographer[0].tagline}.</p>
            <ul id ='tagsList' aria-label="Navigation par tag">
            
                ${tagsTemplate}

            </ul>
        </div>
        <div class="box__photographer--contact"><button class="btn btn-xl" type="button" onClick="openModalForm()" aria-label="Contactez-moi" tabindex="0" >Contactez-moi</button></div>
        <img src="./img/avatar/${photographer[0].portrait}" alt="vignette-du-photographe" aria-label="Portrait du photographe" role="img" tabindex="0">
        
        `

        photographerDOM.innerHTML = result

    }
    //Liste le contenu médias d'un photographe
    displayContentById(medias, name) {
        const contentDOM = this.getElement("#content__list")
        const modalDOM = this.getElement('#modal__content')

        let contentTemplate = ""
        let modalTemplate = ""


        medias.forEach((media, index) => {

            if (media.image) {

                contentTemplate += `

                <div class="box__photographer--list--container">
                      <div class="box__photographer--list--img"><img role="img" aria-label="vignette de la photo: ${media.title}. " src="./img/${name}/${media.image}" alt="${media.title}" onclick="openModal()" class="hover-shadow" tabindex="0"></div>

                    <div class="box__photographer--list--data">
                        <p aria-label="Titre du média:" tabindex="0">${media.title}</p>
                        <div class=likesBox     >
                            <p class="likes" tabindex="0" aria-label="Nombre de likes">${media.likes}</p>
                        <i class="fas fa-heart" aria-label="icone likes" tabindex="0"></i>
                        </div>
                </div>
            </div>
            `

                modalTemplate += `
                 <div class="mySlides"  >
                    <!--<div class="numbertext">1 / 4</div>-->
                    <img role="img" aria-label="image agrandi ${media.title}" src="./img/${name}/${media.image}" tabindex="0" alt="">
                </div>
                
                `


            } else if (media.video) {
                contentTemplate += `

                     <div class="box__photographer--list--container" >
                        <div class="box__photographer--list--img" >

                            <video  role="video" muted   onclick="openModal()"  aria-label = "vignette video ${media.title}" tabindex="0">
                            <source src="./img/${name}/${media.video}"
                                    type="video/mp4" tabindex="0">
                            Sorry, your browser doesn't support embedded videos.
                        </video>
                        
                            </div>
                        <div class="box__photographer--list--data">
                                <p aria-label="titre-media" tabindex="0">${media.title}</p>
                                <div class=likesBox>
                                    <p class="likes" aria-label="Nombre de likes" tabindex="0">${media.likes}</p>
                                <i class="fas fa-heart" aria-label="icone likes" tabindex="0"></i>
                                </div>
                        </div>

                      </div>
        
                
                `
                modalTemplate += `
                 <div  role="dialog" aria-labelledby="myDialog" class="mySlides">
                    <!--<div class="numbertext">1 / 4</div>-->
                       <video  role="video" aria-label = "video du photographe" controls  muted width=100%  tabindex="0">
                            <source src="./img/${name}/${media.video}"
                                    type="video/mp4" >
                            Sorry, your browser doesn't support embedded videos.
                        </video> 
                </div>
                
                `
            }
            contentDOM.innerHTML = contentTemplate
            modalDOM.innerHTML = modalTemplate
        })


    }
    //Affiche le total des likes par photographe
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
                        <div  class="total__likes--heart" aria-label="Nombre de likes total "><span id="total__like">${storage.getItem('total-like')}</span> <i class="fas fa-heart" aria-hidden=true></i></div>
                         <div class="total__likes--price" aria-label="Tarif">${price}€/jour</div>
                 </div>
        `


        likeDOM.innerHTML = likeTemplate


    }
    //Création d'un element du DOM
    createElement(tag, className) {
        const element = document.createElement(tag)
        if (className) element.classList.add(className)

        return element
    }
    // Sélection d'un élement du DOM
    getElement(selector) {
        const element = document.querySelector(selector)

        return element
    }

}

