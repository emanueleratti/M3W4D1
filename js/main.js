const navbarBurgherMenu = document.getElementById("burgher-menu")
const main = document.querySelector("main");

const sidebarAnimation = () => {
    if (!main.classList.contains("slide-left")) {
        main.classList.add("slide-left");
        main.classList.remove("slide-right")
    } else if (main.classList.contains("slide-left")) {
        main.classList.remove("slide-left");
        main.classList.add("slide-right")
    }
}

navbarBurgherMenu.addEventListener("click", sidebarAnimation)

document.addEventListener("click", (e) => {
    const sidebar = document.getElementById("slide-menu");
    const isClickedInsideSidebar = sidebar.contains(e.target);
    const isClickedButton = navbarBurgherMenu.contains(e.target);

    console.log(e.target)
    if(!isClickedInsideSidebar && !isClickedButton){
        main.classList.remove("slide-left");
        main.classList.add("slide-right")
    }
})

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: "auto",
    spaceBetween: 25,
});