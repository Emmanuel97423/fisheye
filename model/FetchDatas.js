
export class FetchDatas {
    constructor(url) {
        this._url = url;
    }
    // get data() {
    //     return this.fetchData()
    // }
    get getPhotographers() {
        return this.photographers()
    }
    get getMedias() {
        return this.medias()
    }
    //Methods
    // fetchData() {
    //     fetch(this._url).then(res => {
    //         if (!res.ok) {
    //             throw new Error("HTTP error " + response.status);
    //         }

    //         res.json().then(result => {
    //             console.log(result);
    //         })
    //     }).catch(err => {
    //         // Do something for an error here
    //         console.log(err)
    //     });
    // }
    photographers() {
        fetch(this._url).then(res => {
            res.json().then(result => {
                const photographers = result.photographers
                console.log('photographers:', photographers)
            })
        }).catch(err => {
            // Do something for an error here
            console.log(err)
        });
    }
    medias() {
        fetch(this._url).then(res => {
            if (!res.ok) {
                throw new Error("HTTP error " + response.status);
            }

            res.json().then(result => {
                console.log(result.media);
            })
        }).catch(err => {
            // Do something for an error here
            console.log(err)
        });
    }
}


