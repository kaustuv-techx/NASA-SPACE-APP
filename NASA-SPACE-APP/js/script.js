$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $(".navbar").addClass("sticky")
        } else {
            $(".navbar").removeClass("sticky")
        }
        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $(".scroll-up-btn").addClass("show")
        } else {
            $(".scroll-up-btn").removeClass("show")
        }
    })
    // toggle menu/navbar script
    $(".menu-btn").click(function () {
        $(".navbar .menu").toggleClass("active")
        $(".menu-btn i").toggleClass("active")
    })

    //slide-up-script
    $(".scroll-up-btn").click(function () {
        $("html").animate({ scrollTop: 0 })
        // removing smooth scroll on slide-up button click
        $("html").css("scrollBehavior", "auto")
    })

    $(".navbar .menu li a").click(function () {
        // applying again smooth scroll on menu items click
        $("html").css("scrollBehavior", "smooth")
    })


    document.querySelectorAll(".article").forEach(article=>{
        article.onscroll = function () {
            if (this.scrollTop > 500) {
                this.querySelector(".scroll-up-btn-a").classList.add("show")
            } else {
                this.querySelector(".scroll-up-btn-a").classList.remove("show")
            }
        }
    })
    $(".scroll-up-btn-a").click(function () {
        $(".article").animate({ scrollTop: 0 })
        // removing smooth scroll on slide-up button click
        $(".article").css("scrollBehavior", "auto")
    })

    $(".close_article").click(function () {
        $(".wrap_article").removeClass("article_show")
    })

    //owl carousel script
    $(".carousel").owlCarousel({
        margin: 20,
        loop: false,
        autoplayTimeOut: 20000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            600: {
                items: 2,
                nav: false,
            },
            1000: {
                items: 3,
                nav: false,
            },
        },
    })
})
