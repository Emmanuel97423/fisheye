

export default class Data {
    constructor(url) {
        this._url = url;
    }
    get data() {
        return this.dataObject()
    }
    dataObject() {
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
}