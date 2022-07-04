const menu = document.querySelector('.menu');
const menuIcon = document.querySelector('.menu__icon');
const closeIcon = document.querySelector('.close-container');
const navBox= document.querySelector('.nav__list')



menu.addEventListener ("click", () => {
    if(menuIcon.classList.contains('hide')) {
        menuIcon.classList.remove('hide');
        closeIcon.classList.add('hide');

        console.log("clicked")

        navBox.classList.add('hide');
    } else {
        closeIcon.classList.remove('hide');
        menuIcon.classList.add('hide');
        navBox.classList.toggle('hide');
        
    }
});