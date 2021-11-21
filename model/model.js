const url = './model/data.json'

//Factory method

class Photographers {

    //Objet contenant tous les photographes 

    async getObject() {

        try {
            //requête FETCH
            let result = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }); //possibilité du catch;
            let data = await result.json();

            //Liste des photographes et leur coordonnées
            let photographers = data.photographers.map((photographer) => {
                const { id, name, city, country, tags, tagline, portrait, price } = photographer;

                return { id, name, city, country, tags, tagline, portrait, price };
            });

            return photographers;

        } catch (error) {
            console.error(error);
        }

    }

    //Objet contenant les médias  d'un photographe par son id 
    async getObjectById(id) {
        try {
            //             //requête FETCH
            let result = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }); //possibilité du catch;
            let data = await result.json();

            let photographer = await data.photographers.filter(photographer => photographer.id == id)

            return photographer;
        } catch (error) {
            console.error(error);
        }
    }
    //Objet contenant tous les photographes par tag sélectionné
    async getObjectByTags(tagsSelected) {
        this._tagsSelected = tagsSelected.replace('#', '').toLowerCase()

        try {
            //             //requête FETCH
            let result = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }); //possibilité du catch;
            let data = await result.json();
            const photographers = data.photographers

            const filters = [this._tagsSelected];


            const filteredArr = photographers.filter((user) => {


                const tags = user.tags

                return filters.every(f => tags.includes(f));
            });

            return filteredArr;
        } catch (error) {
            console.error(error);
        }
    }
}

class Medias {

    //Objet contenant les médias selon l'id dun photographe 
    async getObjectById(id) {
        try {
            //requête FETCH
            let result = await fetch('./model/data.json', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
            let data = await result.json();

            let media = await data.media.filter(item => item.photographerId == id)

            return media;
        } catch (error) {
            console.error(error);
        }
    }
    //Objet contenant les médias filtrer par nombre de likes 
    async getObjectByLikes(id) {
        try {
            //requête FETCH
            let result = await fetch('./model/data.json', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }); //possibilité du catch;
            const data = await result.json();



            // let media = await data.media.sort(item => item.likes)
            const medias = await data.media.filter(item => item.photographerId == id)




            medias.sort((a, b) => b.likes - a.likes)



            // media.sort()
            // let mediasLikes = []

            // for (const media of medias) {
            //     console.log('media:', media)

            //     mediasLikes.push(media.likes)

            // }
            // // console.log('mediasLikes:', mediasLikes.sort())






            return medias;
        } catch (error) {
            console.error(error);
        }
    }
    //Objet contenant les médias filtrer par date
    async getObjectByDate(id) {
        try {
            //requête FETCH
            let result = await fetch('./model/data.json', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }); //possibilité du catch;
            const data = await result.json();
            const medias = await data.media.filter(item => item.photographerId == id)

            medias.sort((a, b) => {
                return new Date(b.date) - new Date(a.date)
            })

            return medias;
        } catch (error) {
            console.error(error);
        }
    }
    //Objet contenant les médias filtrer par titre ordre alphabetique

    async getObjectByTitle(id) {
        try {
            //requête FETCH
            let result = await fetch('./model/data.json', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }); //possibilité du catch;
            const data = await result.json();
            const medias = await data.media.filter(item => item.photographerId == id)

            medias.sort((a, b) => {
                return a.title.localeCompare(b.title)
            })

            return medias;
        } catch (error) {
            console.error(error);
        }
    }


}

//Factory

class Factory {
    // Get all Data
    async getData() {
        const data = this.makeData()
        return data.getObject()
    }
    // Get data by id
    async getDataById(id) {
        const data = this.makeData()
        return data.getObjectById(id)
    }
    //filter data by likes
    async getDataByLikes(medias) {
        const data = this.makeData()
        return data.getObjectByLikes(medias)
    }
    async getDataByDate(medias) {
        const data = this.makeData()
        return data.getObjectByDate(medias)
    }
    async getDataByTitle(medias) {
        const data = this.makeData()
        return data.getObjectByTitle(medias)
    }
    async getDataByTags(medias) {
        const data = this.makeData()
        return data.getObjectByTags(medias)
    }
    async getLikes() {
        const data = this.makeData()
        return data.getLikesMethod()
    }
}


export class PhotographersManager extends Factory {

    makeData() {
        return new Photographers()
    }
}

export class MediasManager extends Factory {
    makeData() {
        return new Medias()
    }
}