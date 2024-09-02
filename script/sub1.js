$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('.top').fadeIn();
    } else {
        $('.top').fadeOut();
    }
});

$('.top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 400);
    return false;
});

$(function () {
    var swiper = new Swiper('.slide2 ', {
        direction: "vertical",//세로 방향
        speed: 1500,//버튼을 슬라이드가 넘어가는 시간
        pagination: {//블릿 버튼
            el: '.slide2 .swiper-pagination',
            clickable: true,
        },
        effect: "fade",
        mousewheel: true,

        watchOverflow: true,
        on: {
            slideChange: function () {
                setTimeout(function () {
                    swiper.params.touchReleaseOnEdges = false;
                    swiper.params.mousewheel.releaseOnEdges = false;
                });
            },
            reachEnd: function () {
                setTimeout(function () {
                    swiper.params.touchReleaseOnEdges = true;
                    swiper.params.mousewheel.releaseOnEdges = true;
                }, 500);
            },
            reachBeginning: function () {
                setTimeout(function () {
                    swiper.params.touchReleaseOnEdges = true;
                    swiper.params.mousewheel.releaseOnEdges = true;
                }, 500);
            }
        }

    });
});


