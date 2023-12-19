(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $('.testimonial-carousel').owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });

    
})(jQuery);



document.addEventListener("DOMContentLoaded", function () {
    var showDetailsBtns = document.querySelectorAll(".showDetailsBtn");

    showDetailsBtns.forEach(function (btn) {
        btn.addEventListener("click", function () {
            var detailsDiv = btn.parentElement.querySelector(".details");
            var detailsVisible = window.getComputedStyle(detailsDiv).maxHeight !== "0px";

            if (!detailsVisible) {
                detailsDiv.style.maxHeight = detailsDiv.scrollHeight + "px";
                btn.textContent = "↑";
            } else {
                detailsDiv.style.maxHeight = "0";
                btn.textContent = "↓";
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const showAnswerBtns = document.querySelectorAll(".showAnswerBtn");

    showAnswerBtns.forEach(function (btn) {
        btn.addEventListener("click", function () {
            const parentDiv = btn.parentElement.parentElement;
            const answerDiv = parentDiv.querySelector(".answer");
            const answerVisible = window.getComputedStyle(answerDiv).maxHeight !== "0px";

            if (!answerVisible) {
                answerDiv.style.maxHeight = answerDiv.scrollHeight + "px";
                btn.textContent = "-";
            } else {
                answerDiv.style.maxHeight = "0";
                btn.textContent = "+";
            }
        });
    });
});

