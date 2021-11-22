

const modalForm = document.getElementById('formModal')

const close = document.getElementById('close')

//Fermeture de la modal formulaire de contact
const closeModalForm = () => {
    modalForm.style.display = 'none'
}
//Ouverture de la modal formulaire de contact
const openModalForm = () => {

    window.setTimeout(() => {
        document.getElementById('formModal__content').focus();
    }, 0)


    modalForm.style.display = 'block';
    window.addEventListener("keydown", (event) => {
        if (event.key == "Escape") {
            closeModalForm()
        }
    })
}









