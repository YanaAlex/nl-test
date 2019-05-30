var owl0 = $('.slider0');
owl0.owlCarousel({
    items: 1,
    loop: true,
    nav: false,
    dots: false,
});

$('.custom-owl-next-button0').click(function () {
    owl0.trigger('next.owl.carousel');
})
$('.custom-owl-prev-button0').click(function () {
    owl0.trigger('prev.owl.carousel');
})

var owl1 = $('.slider1');
owl1.owlCarousel({
    items: 1,
    loop: true,
    nav: false,
    dots: false,
});

$('.custom-owl-next-button1').click(function () {
    owl1.trigger('next.owl.carousel');
})
$('.custom-owl-prev-button1').click(function () {
    owl1.trigger('prev.owl.carousel');
})


// feedback form 

function showFeedbackForm() {
    document.getElementById('feedback-form').style.display = 'block';
}

function hideFeedbackForm() {
    document.getElementById('feedback-form').style.display = 'none';
}

//скролл меню
$(document).ready(function () {
    var start_pos = $('.nav__container').offset().top;
    $(window).scroll(function () {
        if ($(window).scrollTop() >= start_pos) {
            if ($('.nav__container').hasClass() == false) $('.nav__container').addClass('fixed');
        }
        else $('.nav__container').removeClass('fixed');
    });
});

//плавный скролл при нажатии кнопки на первом экране

$(function () {
    $('a[href^="#block2"]').on('click', function (event) {
        event.preventDefault();
        var sc = $(this).attr("href"),
            dn = $(sc).offset().top;
        $('html, body').animate({ scrollTop: dn }, 1500);
    });
});


$(function () {
    $('a[href^="#blockmenu1"]').on('click', function (event) {
        event.preventDefault();
        var sc = $(this).attr("href"),
            dn = $(sc).offset().top;
        $('html, body').animate({ scrollTop: dn }, 1500);
    });
});

$(function () {
    $('a[href^="#blockmenu2"]').on('click', function (event) {
        event.preventDefault();
        var sc = $(this).attr("href"),
            dn = $(sc).offset().top;
        $('html, body').animate({ scrollTop: dn }, 1500);
    });
});

$(function () {
    $('a[href^="#blockmenu3"]').on('click', function (event) {
        event.preventDefault();
        var sc = $(this).attr("href"),
            dn = $(sc).offset().top;
        $('html, body').animate({ scrollTop: dn }, 1500);
    });
});


$(function () {
    $('a[href^="#blockmenu4"]').on('click', function (event) {
        event.preventDefault();
        var sc = $(this).attr("href"),
            dn = $(sc).offset().top;
        $('html, body').animate({ scrollTop: dn }, 1500);
    });
});

$(function () {
    $('a[href^="#blockmenu5"]').on('click', function (event) {
        event.preventDefault();
        var sc = $(this).attr("href"),
            dn = $(sc).offset().top;
        $('html, body').animate({ scrollTop: dn }, 1500);
    });
});

//слайдер фона на первой странице 


// var firstImg = $('#img-1'),
//     secondImg = $('#img-2')

var banners = [
    'header__banner--a',
    'header__banner--b',
    'header__banner--c'
];

var currentBanner = -1;

function changeBanner() {
    var header = document.getElementById('header');
    var cssClass = banners[currentBanner];

    header.classList.remove(cssClass);

    currentBanner = (currentBanner + 1) % banners.length;
    cssClass = banners[currentBanner];
    header.classList.add(cssClass);

}

changeBanner();
 setInterval(changeBanner, 3000);