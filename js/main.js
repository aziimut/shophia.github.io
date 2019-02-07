$(document).ready(function(){


    $('.navbar-light .navbar-nav li').click(function () {
        $('.navbar-light .navbar-nav li').removeClass('active');
        $(this).addClass('active');
    });

    $('.header-slider').slick({
        autoplay: true,
        infinite: true,
        dots: true
    });

    $(window).scroll(function() {

        if($(this).scrollTop() !== 0) {

            $('#topBtn').fadeIn();

        } else {

            $('#topBtn').fadeOut();

        }

    });

    $('#topBtn').click(function() {

        $('body,html').animate({scrollTop:0},800);

    });



});
