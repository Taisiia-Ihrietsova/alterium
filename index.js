// Tabs switching
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


// // cookie
// let cookie = $.cookie('cookie')
//     if(cookie =='none'){
//         $('#cookie').remove(); 
//     } 
//     $('.cookie__btn').click(function() { 
//         $('#cookie').slideUp(700);
//         $.cookie('cookie', 'none', { expires: 7});
// });   