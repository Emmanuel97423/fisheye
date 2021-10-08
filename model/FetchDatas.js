
// export class FetchDatas {
//     constructor(url) {
//         this._url = url;

//     }

//     get getPhotographers() {
//         return this.photographersMethod()
//     }
//     get getMedias() {
//         return this.medias()
//     }
//     photographersMethod() {
//         fetch(this._url).then(res => {
//             res.json().then(result => {

//                 this._photographers = result.photographers
//                 // console.log('photographers:', photographers)
//             })
//         }).catch(err => {
//             // Do something for an error here
//             console.log(err)
//         });
//     }
//     mediasMethod() {
//         fetch(this._url).then(res => {
//             if (!res.ok) {
//                 throw new Error("HTTP error " + response.status);
//             }

//             res.json().then(result => {
//                 console.log(result.media);
//             })
//         }).catch(err => {
//             // Do something for an error here
//             console.log(err)
//         });
//     }
//     photographerByid(id) {
//         fetch(this._url).then(res => {
//             res.json().then(result => {

//                 this._photographers = result.photographers
//                 // console.log('photographers:', photographers)
//             })
//         }).catch(err => {
//             // Do something for an error here
//             console.log(err)
//         });
//     }
// }


