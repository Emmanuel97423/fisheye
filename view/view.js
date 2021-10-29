

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

                tagsTemplate += `<span>#${tag}</span>`

            }

            result += `
          <article class="box__list--card">
            
            <a href="photographer.html?id=${photographer.id}"><img class="portrait" src="/img/avatar/${photographer.portrait}" alt="Vignette du photographe ${photographer.name}"></a>
        <div class="box__list--text">

               <a href="photographer.html?id=${photographer.id}"><h2>${photographer.name}</h2></a>
               <h3>${photographer.city}, <span id="country">${photographer.country}</span></h3>
               <p>${photographer.tagline}</p>
               <span class="box__list--price">${photographer.price}€/jour</span>
            </div>
            <div class="box__list--tag">
                ${tagsTemplate}
                

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
        let tagsTemplate = ""
        let tags = photographer[0].tags
        for (const tag of tags) {

            tagsTemplate += ` <li><span class="tag">#${tag}</span></li>`

        }


        result = `
            <div class="box__photographer--text">
            <h2>${photographer[0].name}</h2>
            <h3>${photographer[0].city}, ${photographer[0].country}</h3>
            <p>${photographer[0].tagline}</p>
            <ul id ='tagsList'>
            
                ${tagsTemplate}

            </ul>
        </div>
        <div class="box__photographer--contact"><button class="btn btn-xl" type="button" onClick="openModalForm()" >Contactez-moi</button></div>
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
                        <div class=likesBox>
                            <p class="likes" aria-label="likes">${media.likes}</p>
                        <i class="fas fa-heart"></i>
                        </div>
                </div>
            </div>
            `


            } else if (media.video) {
                contentTemplate += `

                     <div class="box__photographer--list--container">
                        <div class="box__photographer--list--img">

                            <video  role="video" muted  >
                            <source src="/img/${name}/${media.video}"
                                    type="video/mp4">
                            Sorry, your browser doesn't support embedded videos.
                        </video>
                        
                            </div>
                        <div class="box__photographer--list--data">
                                <p role="titre-media">${media.title}</p>
                                <div class=likesBox>
                                    <p class="likes" aria-label="likes">${media.likes}</p>
                                <i class="fas fa-heart"></i>
                                </div>
                        </div>

                      </div>
        
                
                `
            }
            contentDOM.innerHTML = contentTemplate
            // contentDOM.innerHTML += videoTemplate

        }


    }
    // displayVideoById(medias, name) {
    //     // console.log('medias:', medias)
    //     const contentDOM = this.getElement("#content__list")
    //     let videoTemplate = "";


    //     for (const media of medias) {

    //         if (media.video) {


    //             videoTemplate += `

    //                  <div class="box__photographer--list--container">
    //                     <div class="box__photographer--list--img">

    //                         <video role="video" muted  >
    //                         <source src="/img/${name}/${media.video}"
    //                                 type="video/mp4">
    //                         Sorry, your browser doesn't support embedded videos.
    //                     </video>

    //                         </div>
    //                     <div class="box__photographer--list--data">
    //                             <p role="titre-media">${media.title}</p>
    //                             <div>
    //                                 <role="like-media"span>${media.likes}</span>
    //                             <i class="fas fa-heart"></i>
    //                             </div>
    //                     </div>

    //                   </div>


    //             `
    //         }

    //     }
    //     contentDOM.innerHTML += videoTemplate





    // }
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

