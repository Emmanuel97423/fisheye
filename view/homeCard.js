

export class View {
    constructor(model) {



        // this._id = model.id;
        //root element
        this._homeCard = this.getElement("#homeCard");


        //photographerCard

        this._card = this.getElement(".box__list--card")

        //photographer text

        // this._text = this.getElement("box__list--text")
        // this._name = this.createElement("h2")
        // this._name.textContent = model.name

        // photographer location

        // this._location = this.createElement("h3")
        // this._location.textContent = model.city
        // this._country = this.createElement("span", "#country")
        // this._country.textContent = model.country

        //photographer tagline

        // this._tagline = this.createElement("p")
        // this._tagline.textContent = model.tagline

        //Price

        // this._price = this.createElement("span", "box__list--price")
        // this._price.textContent = model.price

        //photographer image

        this._image = this.createElement("img")
        this._image.src = "model.imageUrl"

        //photographer tag

        // this._tags = this.getElement("box__list--tag")
        // this._span = this.displayTags(model.tags)

        //Append Card

        this._card.append(this._image)
        // this._card.append(this._text, this._tag)

        //Append Card text

        // this._text.append(this._name, this._location, this._tagline)
        // this._location.append(this._country)

        //Append Card tag

        // this._tag.append(this._span)

    }

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

    // displayTags(items) {
    //     console.log('items:', items)
    //     items.forEach(item => {
    //         const span = this.createElement('span')
    //         span.textContent = item
    //         return span


    //     })
    // }

}