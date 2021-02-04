// Tabs switching

const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
let menuItem = document.querySelectorAll('.menu__item');

let tabsTrigger = document.querySelectorAll(".active__tabs");
tabsTrigger.forEach(function (trigger) {
    trigger.addEventListener("click", function () {
    const id = this.getAttribute("data-tab");
    changeTab(id, trigger);
  });
});

const changeTab = (id, nextElement) => {
    const tabItem = document.querySelector('.tab__item[data-tab="' + id + '"]');
    const activeTabsTrigger = document.querySelector(".active__tabs.active");
    const activeTabItem = document.querySelector(".tab__item.active");

    activeTabsTrigger.classList.remove("active");
    nextElement.classList.add("active");
    activeTabItem.classList.remove("active");
    tabItem.classList.add("active");
};


//BURGER



burger.onclick = function() {
    if (burger.classList.contains("open")) {
        burger.classList.remove("open");  
        menu.classList.add("menu-mobile")
    } else {
        burger.classList.add("open");
        menu.classList.remove("menu-mobile");
    }
  };

menuItem.forEach(el => {
    el.onclick = function() {
        el.classList.add('active');
        if(burger.classList.contains('open')) {
            menu.classList.add('menu-mobile');
            burger.classList.remove('open');
        }
    }
})


//  // menu
//  $('.burger').click(function () {
//     $(this).toggleClass('open');
//     $('.menu').toggleClass('menu-mobile');
// });

// $('.menu__item').click(function (){
//     $('.menu__item').removeClass('active');
//     $(this).addClass('active');
//     if ($('.burger').hasClass('open')) {
//         $('.menu').addClass('menu-mobile');
//         $('.burger').removeClass('open');
//     }
// });

