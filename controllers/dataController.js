

export class FetchData {
    constructor(url) {
        this._url = url;
    }
    get data() {
        return this.fetchData()
    }
    fetchData() {
        fetch(this._url).then(response => {
            return response.json();
        }).then(data => {
            // Work with JSON data here
            console.log(data);
        }).catch(err => {
            // Do something for an error here
            console.log(err)
        });
    }
    // fetchDataPhotographer() {
    //     if (this._url == photographersJson) {

    //     }
    // }
}

export class Photographer {

    constructor(name, id, city, country, tags, tagline, price, portrait) {
        this._name = name;
        this._id = id;
        this._city = city;
        this._country = country;
        this._tags = tags;
        this._tagline = tagline;
        this._price = price;
        this._portrait = portrait;

    }
    get photographer() {
        return this.getPhotographer()
    }

    getPhotographer() {
        return new FetchData()
    }


}