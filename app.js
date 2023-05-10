const navBar = document.querySelector('nav');
const arrowDown = document.querySelector(".arrowDown");

// Função para verificar quando tem scroll na tela
const verify_scrolled = () => {
    navBar.classList.toggle('scrolled_screen', scrollY > 0);
    arrowDown.classList.toggle('scrolled_screen', scrollY > 0);
}

window.addEventListener("scroll", verify_scrolled);

//Animação do gato com lottie
let animation_div = document.querySelector(".cat_coffe_animation");
let animation_object = bodymovin.loadAnimation({
    container: animation_div,
    renderer: 'svg',
    loop: true,
    autoLoadSegments: false,
    path: "https://assets5.lottiefiles.com/packages/lf20_xkbhgbld.json"
})

const responsive_button = () => {
    const mobile_menu = document.querySelector(".mobile-menu");
    const nav_list = document.querySelector(".navList");

    mobile_menu.addEventListener("click", () => {
        nav_list.classList.toggle("active")
    })
}

responsive_button()