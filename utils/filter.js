const arrowUp = document.querySelector(".fa-chevron-up")
const arrowDown = document.querySelector(".fa-chevron-down")
const button = document.getElementById("myDropdown")
const dropGroup = document.querySelector('.drop-group')
console.log('dropGroup:', dropGroup)



function filter() {
    const show = document.querySelector(".show")


    button.classList.toggle("show");
    document.querySelector(".dropbtn").style.borderRadius = "5px 5px 0 0";
    if (show == null) {

        arrowUp.style.display = "inline-block";
        arrowDown.style.display = "none";
        dropGroup.style.borderRadius = '5px 5px 0 0';

    } else {
        arrowDown.style.display = "block";
        arrowUp.style.display = "none";
        dropGroup.style.borderRadius = '5px ';

    }


    // document.querySelector(".fa-chevron-down").style.webkitTransform = "rotate(180deg)";

}



function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}