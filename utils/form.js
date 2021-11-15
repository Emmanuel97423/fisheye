// import { Form } from '../classes/formClass.js'

const myForm = document.getElementById('formModal__content')



myForm.addEventListener('submit', (e) => {
    e.preventDefault()
    // let validationForm = new Form()
    const formData = new FormData(myForm)
    formData.forEach((value, key) => {
        console.log(value)

    })
    alert('Message envoyé!')
    modalForm.style.display = 'none'
})
