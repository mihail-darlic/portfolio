window.addEventListener('DOMContentLoaded', function () {
    var menuBtn = document.querySelector('.burger');
    var nav = document.querySelector('.nav');
    var navLinks = document.querySelectorAll('.nav__link');
    var body = document.body;

    menuBtn.addEventListener('click', function () {
        menuBtn.classList.toggle('_active');
        nav.classList.toggle('_active');
        body.classList.toggle('lock');
    });

    for (var i = 0; i < navLinks.length; i++) {
        var navLink = navLinks[i];

        navLink.addEventListener('click', removeActive);
    }

    window.addEventListener('resize', function () {
        if (document.documentElement.clientWidth > 960) {
            removeActive();
        }
    });

    function removeActive() {
        menuBtn.classList.remove('_active');
        nav.classList.remove('_active');
        body.classList.remove('lock');
    }
});

// owl carousel script
$('.testimonials__carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    items: 1,
    responsive: {
        0: {
            items: 1
        }
    }
});