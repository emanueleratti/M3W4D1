/* BURGHER MENU WITH SLIDEBAR */
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

/*
document.addEventListener("click", (e) => {
    const sidebar = document.getElementById("slide-menu");
    const isClickedInsideSidebar = sidebar.contains(e.target);
    const isClickedButton = navbarBurgherMenu.contains(e.target);

    if(!isClickedInsideSidebar && !isClickedButton){
        main.classList.remove("slide-left");
        main.classList.add("slide-right")
    }
})
*/

/* SWIPER SLIDE */
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


/* FILM CARD CREATION */
const cards = {
    trendingNow: [
    {
        img: './assets/1.png',
        video: 'https://www.youtube.com/embed/so_1l1yYtno?si=BVvLbLp8-Dhb-Ybg',
        compatibility: '71% compatibile',
        age: '13+',
        type: 'Miniserie',
        quality: 'HD',
        categories1: 'Profondo',
        categories2: 'Emozionante',
        categories3: 'Drama'
    },
    {
        img: './assets/2.png',
        video: 'https://www.youtube.com/embed/M_YNU_mhJvk?si=EkyBzN7ha16xV99L',
        compatibility: '79% compatibile',
        age: '15+',
        type: 'Miniserie',
        quality: '4K',
        categories1: 'Azione',
        categories2: 'Avventura',
        categories3: 'Cult'
    },
    {
        img: './assets/3.png',
        video: 'https://www.youtube.com/embed/eqdaWny5Irs?si=TPIKRbuE8IItfU4Y',
        compatibility: '86% compatibile',
        age: '18+',
        type: 'Miniserie',
        quality: '2K',
        categories1: 'Bambini',
        categories2: 'Famiglia',
        categories3: 'Classici'
    },
    {
        img: './assets/4.png',
        video: 'https://www.youtube.com/embed/EYh5j0ttfM8?si=aLeG97ORyTZNM7rX',
        compatibility: '73% compatibile',
        age: '15+',
        type: 'Serie',
        quality: 'HD',
        categories1: 'Commedie',
        categories2: 'Emozionante',
        categories3: 'Straniero'
    },
    {
        img: './assets/5.png',
        video: 'https://www.youtube.com/embed/n1yLsV-IPOk?si=BUuqV4W5vrP-rwiI',
        compatibility: '93% compatibile',
        age: '18+',
        type: 'Miniserie',
        quality: '4K',
        categories1: 'Famiglia',
        categories2: 'Horror',
        categories3: 'Documentario'
    },
    {
        img: './assets/6.png',
        video: 'https://www.youtube.com/embed/witEvE5a8HU?si=u9ls-BsGePSWSDKq',
        compatibility: '81% compatibile',
        age: '21+',
        type: 'Serie',
        quality: 'UHD',
        categories1: 'Drammatici',
        categories2: 'Romantici',
        categories3: 'Thriller'
    },
    {
        img: './assets/7.png',
        video: 'https://www.youtube.com/embed/so_1l1yYtno?si=BVvLbLp8-Dhb-Ybg',
        compatibility: '71% compatibile',
        age: '13+',
        type: 'Miniserie',
        quality: 'HD',
        categories1: 'Profondo',
        categories2: 'Emozionante',
        categories3: 'Drama'
    },
    ],
    watchAgain: [
    {
        img: './assets/7.png',
        video: 'https://www.youtube.com/embed/so_1l1yYtno?si=BVvLbLp8-Dhb-Ybg',
        compatibility: '71% compatibile',
        age: '13+',
        type: 'Miniserie',
        quality: 'HD',
        categories1: 'Profondo',
        categories2: 'Emozionante',
        categories3: 'Drama'
    },
    {
        img: './assets/8.png',
        video: 'https://www.youtube.com/embed/M_YNU_mhJvk?si=EkyBzN7ha16xV99L',
        compatibility: '79% compatibile',
        age: '15+',
        type: 'Miniserie',
        quality: '4K',
        categories1: 'Azione',
        categories2: 'Avventura',
        categories3: 'Cult'
    },
    {
        img: './assets/9.png',
        video: 'https://www.youtube.com/embed/eqdaWny5Irs?si=TPIKRbuE8IItfU4Y',
        compatibility: '86% compatibile',
        age: '18+',
        type: 'Miniserie',
        quality: '2K',
        categories1: 'Bambini',
        categories2: 'Famiglia',
        categories3: 'Classici'
    },
    {
        img: './assets/10.png',
        video: 'https://www.youtube.com/embed/EYh5j0ttfM8?si=aLeG97ORyTZNM7rX',
        compatibility: '73% compatibile',
        age: '15+',
        type: 'Serie',
        quality: 'HD',
        categories1: 'Commedie',
        categories2: 'Emozionante',
        categories3: 'Straniero'
    },
    {
        img: './assets/11.png',
        video: 'https://www.youtube.com/embed/n1yLsV-IPOk?si=BUuqV4W5vrP-rwiI',
        compatibility: '93% compatibile',
        age: '18+',
        type: 'Miniserie',
        quality: '4K',
        categories1: 'Famiglia',
        categories2: 'Horror',
        categories3: 'Documentario'
    },
    {
        img: './assets/12.png',
        video: 'https://www.youtube.com/embed/witEvE5a8HU?si=u9ls-BsGePSWSDKq',
        compatibility: '81% compatibile',
        age: '21+',
        type: 'Serie',
        quality: 'UHD',
        categories1: 'Drammatici',
        categories2: 'Romantici',
        categories3: 'Thriller'
    },
    {
        img: './assets/13.png',
        video: 'https://www.youtube.com/embed/so_1l1yYtno?si=BVvLbLp8-Dhb-Ybg',
        compatibility: '71% compatibile',
        age: '13+',
        type: 'Miniserie',
        quality: 'HD',
        categories1: 'Profondo',
        categories2: 'Emozionante',
        categories3: 'Drama'
    },
    ],
    newReleases: [
    {
        img: './assets/13.png',
        video: 'https://www.youtube.com/embed/so_1l1yYtno?si=BVvLbLp8-Dhb-Ybg',
        compatibility: '71% compatibile',
        age: '13+',
        type: 'Miniserie',
        quality: 'HD',
        categories1: 'Profondo',
        categories2: 'Emozionante',
        categories3: 'Drama'
    },
    {
        img: './assets/14.png',
        video: 'https://www.youtube.com/embed/M_YNU_mhJvk?si=EkyBzN7ha16xV99L',
        compatibility: '79% compatibile',
        age: '15+',
        type: 'Miniserie',
        quality: '4K',
        categories1: 'Azione',
        categories2: 'Avventura',
        categories3: 'Cult'
    },
    {
        img: './assets/15.png',
        video: 'https://www.youtube.com/embed/eqdaWny5Irs?si=TPIKRbuE8IItfU4Y',
        compatibility: '86% compatibile',
        age: '18+',
        type: 'Miniserie',
        quality: '2K',
        categories1: 'Bambini',
        categories2: 'Famiglia',
        categories3: 'Classici'
    },
    {
        img: './assets/16.png',
        video: 'https://www.youtube.com/embed/EYh5j0ttfM8?si=aLeG97ORyTZNM7rX',
        compatibility: '73% compatibile',
        age: '15+',
        type: 'Serie',
        quality: 'HD',
        categories1: 'Commedie',
        categories2: 'Emozionante',
        categories3: 'Straniero'
    },
    {
        img: './assets/17.png',
        video: 'https://www.youtube.com/embed/n1yLsV-IPOk?si=BUuqV4W5vrP-rwiI',
        compatibility: '93% compatibile',
        age: '18+',
        type: 'Miniserie',
        quality: '4K',
        categories1: 'Famiglia',
        categories2: 'Horror',
        categories3: 'Documentario'
    },
    {
        img: './assets/18.png',
        video: 'https://www.youtube.com/embed/witEvE5a8HU?si=u9ls-BsGePSWSDKq',
        compatibility: '81% compatibile',
        age: '21+',
        type: 'Serie',
        quality: 'UHD',
        categories1: 'Drammatici',
        categories2: 'Romantici',
        categories3: 'Thriller'
    },
    ],
    selectedForYou: [
        {
        img: './assets/18.png',
        video: 'https://www.youtube.com/embed/so_1l1yYtno?si=BVvLbLp8-Dhb-Ybg',
        compatibility: '71% compatibile',
        age: '13+',
        type: 'Miniserie',
        quality: 'HD',
        categories1: 'Profondo',
        categories2: 'Emozionante',
        categories3: 'Drama'
    },
    {
        img: './assets/9.png',
        video: 'https://www.youtube.com/embed/M_YNU_mhJvk?si=EkyBzN7ha16xV99L',
        compatibility: '79% compatibile',
        age: '15+',
        type: 'Miniserie',
        quality: '4K',
        categories1: 'Azione',
        categories2: 'Avventura',
        categories3: 'Cult'
    },
    {
        img: './assets/11.png',
        video: 'https://www.youtube.com/embed/eqdaWny5Irs?si=TPIKRbuE8IItfU4Y',
        compatibility: '86% compatibile',
        age: '18+',
        type: 'Miniserie',
        quality: '2K',
        categories1: 'Bambini',
        categories2: 'Famiglia',
        categories3: 'Classici'
    },
    {
        img: './assets/4.png',
        video: 'https://www.youtube.com/embed/EYh5j0ttfM8?si=aLeG97ORyTZNM7rX',
        compatibility: '73% compatibile',
        age: '15+',
        type: 'Serie',
        quality: 'HD',
        categories1: 'Commedie',
        categories2: 'Emozionante',
        categories3: 'Straniero'
    },
    {
        img: './assets/12.png',
        video: 'https://www.youtube.com/embed/n1yLsV-IPOk?si=BUuqV4W5vrP-rwiI',
        compatibility: '93% compatibile',
        age: '18+',
        type: 'Miniserie',
        quality: '4K',
        categories1: 'Famiglia',
        categories2: 'Horror',
        categories3: 'Documentario'
    },
    {
        img: './assets/8.png',
        video: 'https://www.youtube.com/embed/witEvE5a8HU?si=u9ls-BsGePSWSDKq',
        compatibility: '81% compatibile',
        age: '21+',
        type: 'Serie',
        quality: 'UHD',
        categories1: 'Drammatici',
        categories2: 'Romantici',
        categories3: 'Thriller'
    },
    {
        img: './assets/18.png',
        video: 'https://www.youtube.com/embed/witEvE5a8HU?si=u9ls-BsGePSWSDKq',
        compatibility: '81% compatibile',
        age: '21+',
        type: 'Serie',
        quality: 'UHD',
        categories1: 'Drammatici',
        categories2: 'Romantici',
        categories3: 'Thriller'
    },
    ]
}

const filmCardTemplate = document.getElementById("film-card-template");
const templateContent = filmCardTemplate.content;
const sectionTredingNow = document.getElementById("trending-now");
const sectionWatchAgain = document.getElementById("watch-again");
const sectionNewReleases = document.getElementById("new-releases");
const sectionSelectedForYou = document.getElementById("selected-for-you");

const filmCardCreation = (filmCardData, section) => {
    const newCard = document.importNode(templateContent, true);
    newCard.querySelector(".film-card img").setAttribute("src", filmCardData.img);
    newCard.querySelector(".film-card-details .top iframe").setAttribute("src", filmCardData.video);
    newCard.querySelector(".film-card-details .compatibility").textContent = filmCardData.compatibility;
    newCard.querySelector(".film-card-details .age").textContent = filmCardData.age;
    newCard.querySelector(".film-card-details .type").textContent = filmCardData.type;
    newCard.querySelector(".film-card-details .quality").textContent = filmCardData.quality;
    newCard.querySelector(".film-card-details .bottom .categories > p:nth-child(1)").textContent = filmCardData.categories1;
    newCard.querySelector(".film-card-details .bottom .categories > p:nth-child(3)").textContent = filmCardData.categories2;
    newCard.querySelector(".film-card-details .bottom .categories > p:nth-child(5)").textContent = filmCardData.categories3;
    section.appendChild(newCard);

}

cards.trendingNow.forEach(card => {
    filmCardCreation(card, sectionTredingNow);
});

cards.watchAgain.forEach(card => {
    filmCardCreation(card, sectionWatchAgain);
});

cards.newReleases.forEach(card => {
    filmCardCreation(card, sectionNewReleases);
});

cards.selectedForYou.forEach(card => {
    filmCardCreation(card, sectionSelectedForYou);
});


/* ANIMATION REVEAL */
const elementToObserve = document.querySelectorAll(".animation-scroll");

const options = {
    rootMargin: '0px',
    threshold: 0.6
}

const callBack = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        } else {
            entry.target.classList.remove("visible");
        }
    })
}

const observer = new IntersectionObserver(callBack, options);

elementToObserve.forEach(element => {
    observer.observe(element);
})
