$(document).ready(function () {

    //메인 메뉴

    $('nav').hover(function () {
        $('.navbg').stop().slideDown('fast');
    }, function () {
        $('.navbg').stop().slideUp('fast');
    });

    $('.mainnav>li').hover(function () {
        $(this).find('.subnav').fadeIn(0);
    }, function () {
        $(this).find('.subnav').fadeOut(0);
        
    });

    // 메인 슬라이드

    let mainNum = 0;
    let pos = 0;
    const totalSlides = $('.main_img li').length;

    $('.slide_text li').fadeOut(0);
    $('.slide_text li').first().fadeIn(0);
    $('.main_img li').first().fadeIn(0);

    $('.l_arrow').click(function (e) {
        e.preventDefault();
        mainNum = (mainNum - 1 + totalSlides) % totalSlides;
        changeSlide();
    });

    $('.r_arrow').click(function (e) {
        e.preventDefault();
        mainNum = (mainNum + 1) % totalSlides;
        changeSlide();
    });

    function changeSlide() {
        pos = mainNum * 60;
        $('.main_img li').fadeOut('slow');
        $('.main_img li').eq(mainNum).fadeIn('slow');

        $('.slide_text li').fadeOut('slow');
        $('.slide_text li').eq(mainNum).fadeIn('slow');

        $('.indicator_bar').animate({ left: pos }, 'slow');
    }

    setInterval(function () {
        mainNum = (mainNum + 1) % totalSlides;
        changeSlide();
    }, 4000);

    


    // 브랜드스토리

    $(window).on("scroll", function () {
        let scrollPos = $(this).scrollTop();
        if (scrollPos > 650) {
            $('.brand li').each(function (idx) {
                $(this).delay(idx * 250).animate({ opacity: 1 }, 300);
            });
        }
    });

    $('.brand li').hover(function () {
        $(this).find('.brand_view').stop().fadeIn(250);
    }, function () {
        $(this).find('.brand_view').stop().fadeOut(250);
    });



    // 신상품 슬라이드

    let productNum = 0;
    const totalProducts = $('.new_product li').length;

    $('.new_product li').fadeOut(0);
    $('.new_product li').first().fadeIn(0);
    $('.page span').text(1);

    $('.l_newarrow').click(function (e) {
        e.preventDefault();
        productNum = (productNum - 1 + totalProducts) % totalProducts;
        changeProduct();
    });

    $('.r_newarrow').click(function (e) {
        e.preventDefault();
        productNum = (productNum + 1) % totalProducts;
        changeProduct();
    });

    function changeProduct() {

        $('.new_product li').fadeOut(300);
        $('.new_product li').eq(productNum).fadeIn(300);
        $('.page span').text(productNum + 1);

    }

    setInterval(function () {
        productNum = (productNum + 1) % totalProducts;
        changeProduct();

    }, 4500);


    //공지사항

    $('.notice_list li').each(function (index) {
        $(this).css("top", index * 52);
    });

    setInterval(function () {
        $('.notice_list li').each(function (index) {
            let top = parseInt($(this).css("top"));
            let movePos = top - 52;
            $(this).animate({ top: movePos }, 400, function () {
                if (movePos < 0) {
                    $(this).css("top", 104);
                }

            });
        });
    }, 3500);



    //리뷰

    $('.reviewwrap ul li').each(function (index) {
        $(this).css("left", index * 357);
    });

    $('.r_reviewarrow').click(function (e) {

        e.preventDefault();

        $('.reviewwrap ul li').each(function () {

            let left = parseInt($(this).css("left"));
            let movePos = left - 357;
            $(this).animate({ left: movePos }, 250, function () {
                if (movePos < 0) {
                    $(this).css("left", 1785);
                }

            });
        });
    });


    $(".l_reviewarrow").click(function (e) {

        e.preventDefault();

        $(".reviewwrap ul li").each(function () {
            let left = parseInt($(this).css("left"));
            let movePos = left + 357;

            $(this).animate({ left: movePos }, 250, function () {
                if (movePos >= 2142) {
                    $(this).css("left", 0);
                }
            });
        });
    });

    setInterval(function () {
        $('.reviewwrap ul li').each(function () {

            let left = parseInt($(this).css("left"));
            let movePos = left - 357;
            $(this).animate({ left: movePos }, 250, function () {
                if (movePos < -185) {
                    $(this).css("left", 1785);
                }

            });
        });
    }, 4000);

    //팝업

    $('.popup a').click(function () {
        $('.popup').hide(0);
    });

    $('.logo').click(function () {
        $('.popup').show(0);
    });

});
