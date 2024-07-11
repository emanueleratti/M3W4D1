const navbarBurgherMenu = document.getElementById("burgher-menu")

navbarBurgherMenu.addEventListener("click", () => {
    const main = document.querySelector("main");
    if (!main.classList.contains("slide-left")) {
        main.classList.add("slide-left");
        main.classList.remove("slide-right")
    } else if (main.classList.contains("slide-left")) {
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