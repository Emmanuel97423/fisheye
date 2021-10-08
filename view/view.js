

export class View {
    constructor() { }
    //List all photographers
    displayPhotographers(photographers) {
        const photographersListDOM = document.querySelector("#homeCard");
        let result = "";

        for (const photographer of photographers) {


            result += `
          <article class="box__list--card">
            <img class="portrait" src="/img/avatar/${photographer.portrait}" alt="Vignette du photographe ${photographer.name}">
        <div class="box__list--text">

               <a href="photographer.html?id=${photographer.id}"><h2>${photographer.name}</h2></a>
               <h3>${photographer.city}, <span id="country">${photographer.country}</span></h3>
               <p>${photographer.tagline}</p>
               <span class="box__list--price">${photographer.price}€/jour</span>
            </div>
            <div class="box__list--tag">
                <span>#${this.tags}</span>
                

            </div>
        </article>
        `


        }

        photographersListDOM.innerHTML = result;
    }
    //Get One photographer
    displayPhotographerById(photographer) {

        const photographerDOM = document.querySelector("#photographer");
        let result = "";

        result = `
            <div class="box__photographer--text">
            <h2>${photographer[0].name}</h2>
            <h3>${photographer[0].city}, ${photographer[0].country}</h3>
            <p>${photographer[0].tagline}</p>
            <ul id ='tagsList'>
                <li><span>#Portrait</span></li>
                <li><span>#Event</span></li>
                <li><span>#Travel</span></li>
                <!-- <li><span>#Gastronomy</span></li> -->

            </ul>
        </div>
        <div class="box__photographer--contact"><button class="btn btn-xl" type="button">Contactez-moi</button></div>
        <img src="/img/avatar/${photographer[0].portrait}" alt="vignette-du-photographe">
        
        `

        photographerDOM.innerHTML = result

    }
    //List content by photographer
    displayContentById(medias, name) {


        const contentDOM = this.getElement("#content__list")




        let contentTemplate = ""



        for (const media of medias) {


            if (media.image) {

                contentTemplate += `

                       <div class="box__photographer--list--container">
            <div class="box__photographer--list--img"><img src="/img/${name}/${media.image}" alt="${media.title}" onclick="openModal();currentSlide(1)" class="hover-shadow"></div>

        <div class="box__photographer--list--data">
            <p>${media.title}</p>
            <div>
                <span>${media.likes}</span>
            <i class="fas fa-heart"></i>
            </div>
        </div>
       </div>
            `


            }
            contentDOM.innerHTML = contentTemplate


        }







    }

    // displayTagList(photographer) {
    //     const tagListDOM = this.getElement("#tagsList")

    // }
    // Create an element with an optional CSS class
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