// Tabs switching

const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
let menuItem = document.querySelectorAll('.menu__item');

let tabsTrigger = document.querySelectorAll(".active__tabs");
tabsTrigger.forEach(function(trigger) {
    trigger.addEventListener("click", function() {
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
        if (burger.classList.contains('open')) {
            menu.classList.add('menu-mobile');
            burger.classList.remove('open');
        }
    }
})


// ACORDION

const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');

    for (i = 0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false');
        this.classList.remove('active');
    }

    if (itemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true');
        setTimeout(() => this.classList.add('active'), 200);
    }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));