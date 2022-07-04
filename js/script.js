const menu = document.querySelector('.menu');
const menuIcon = document.querySelector('.menu__icon');
const closeIcon = document.querySelector('.close-container');
const navBox= document.querySelector('.nav__list')



console.log(menuIcon)
console.log(closeIcon)
/* Function Declarations */


menu.addEventListener("click", () => {
    console.log(menuIcon.classList.value);

    if(menuIcon.classList.contains('hide')) {
        menuIcon.classList.remove('hide');
        closeIcon.classList.add('hide');

        navBox.classList.add('hide');
    }
    else {
        closeIcon.classList.remove('hide');
        menuIcon.classList.add('hide');


        navBox.classList.remove('hide');
    }

});