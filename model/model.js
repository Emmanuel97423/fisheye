const url = './model/data.json'

class Photographers {


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

            let photographers = data.photographers.map((photographer) => {
                const { id, name, city, country, tags, tagline, portrait, price } = photographer;
                // console.log('photographer:', photographer)

                return { id, name, city, country, tags, tagline, portrait, price };
            });
            // console.log('photographers:', photographers)
            return photographers;

        } catch (error) {
            console.error(error);
        }

    }

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


            // let photographers = data.photographers.map((photographer) => {
            //     const { id, name, city, country, tags, tagline, portrait, } = photographer;
            //     // console.log('photographer:', photographer)

            //     return { id, name, city, country, tags, tagline, portrait, };
            // });

            return photographer;
        } catch (error) {
            console.error(error);
        }
    }
}

class Medias {

    async getObjectById(id) {
        try {
            //requête FETCH
            let result = await fetch('./model/data.json', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }); //possibilité du catch;
            let data = await result.json();



            let media = await data.media.filter(item => item.photographerId == id)



            // let photographers = data.photographers.map((photographer) => {
            //     const { id, name, city, country, tags, tagline, portrait, } = photographer;
            //     // console.log('photographer:', photographer)

            //     return { id, name, city, country, tags, tagline, portrait, };
            // });

            return media;
        } catch (error) {
            console.error(error);
        }
    }
}

class Factory {
    async getData() {
        const data = this.makeData()
        return data.getObject()
    }
    async getDataById(id) {
        const data = this.makeData()
        return data.getObjectById(id)
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