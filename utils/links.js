//lien logo vers page d'accueil
const logo = document.getElementById('logo__top')
logo.addEventListener('click', (e) => {
    e.preventDefault();
    window.open('./fisheye', "_self")
})