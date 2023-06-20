const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
const navLogo = document.querySelector("#navbar__logo");


const mobileMenu = () => {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
}

menu.addEventListener("click", mobileMenu);





const highlightMenu = () => {
    const elem = document.querySelector(".highlight");
    const homeMenu = document.querySelector("#home-page");
    const aboutMenu = document.querySelector("#about-page");
    const linksMenu = document.querySelector("#links-page");
    let scrollPos = window.scrollY;
    


    if (window.innerWidth > 960 && scrollPos < 600) {
        homeMenu.classList.add("highlight");
        aboutMenu.classList.remove("highlight");
        return
    } else if (window.innerWidth > 960 && scrollPos < 1400) {
        aboutMenu.classList.add("highlight");
        homeMenu.classList.remove("highlight");
        linksMenu.classList.remove("highlight");
        return
    } else if (window.innerWidth > 960 && scrollPos < 2345) {
        linksMenu.classList.add("highlight");
        aboutMenu.classList.remove("highlight");
        return;
    }

    if((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
        elem.classList.remove("highlight");
    }


};


window.addEventListener("scroll", highlightMenu);

window.addEventListener("click", highlightMenu);



const hideMobileMenu = () => {
    const menuBars = document.querySelector(".is-active")
    if(window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle("is-active")
        menuLinks.classList.remove("active")
    }
}


menuLinks.addEventListener("click", hideMobileMenu)
navLogo.addEventListener("click", hideMobileMenu)








let activeIndex = 0;

const groups = document.getElementsByClassName("card-group");

const handleRightClick = () => {
    // Bump active index

    const nextIndex = activeIndex + 1 <= groups.length - 1 ? activeIndex +1 : 0;

    const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
        nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

    // Active group becomes after

    currentGroup.dataset.status = "after";

    // Next group becomes active

    nextGroup.dataset.status = "becoming-active-from-before";

    setTimeout(() => {
        nextGroup.dataset.status = "active";
        activeIndex = nextIndex;
    })


}

const handleLeftClick = () => {
    

    const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : groups.length - 1;

    const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
        nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

    currentGroup.dataset.status = "before";

    

    nextGroup.dataset.status = "becoming-active-from-after";

    setTimeout(() => {
        nextGroup.dataset.status = "active";
        activeIndex = nextIndex;
    })

}