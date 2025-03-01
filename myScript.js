let lastScrollTop = 0;
const header = document.querySelector(".header");

window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Si baja, oculta el header
        header.classList.add("hidden");
    } else {
        // Si sube, muestra el header al instante
        header.classList.remove("hidden");
    }
    lastScrollTop = scrollTop;
});


        document.querySelector(".menu-toggle").addEventListener("click", function() {
            document.querySelector(".navigation ul").classList.toggle("active");
        });