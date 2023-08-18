var scrollVal = $(this).scrollTop();
if (scrollVal > 1 ) {
    $('header').css({
        'padding':'16px 0',
        'background':'#fff',
        'box-shadow':'0px 4px 10px rgba(0, 0, 0, 0.05',
    });
} else {
    $('header').css({
        'padding':'30px 0',
        'background':'none',
        'box-shadow':'none',
    });
}

$(document).ready(function() {
    var windowWidth = window.innerWidth;

    // scroll header 樣式
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if(windowWidth > 1024){
            if (scroll > 1) {
                $('header').css({
                    'padding':'16px 0',
                    'background':'#fff',
                    'box-shadow':'0px 4px 10px rgba(0, 0, 0, 0.05',
                });
            } else {
                $('header').css({
                    'padding':'30px 0',
                    'background':'none',
                    'box-shadow':'none',
                });
            };

            if (scroll > 500) {
                $('header .account a.cta-btn').show();
            } else {
                $('header .account a.cta-btn').hide();
            };

        }else{
            if (scroll > 1) {
                $('header').css({
                    'padding':'16px 0',
                    'background':'#fff',
                    'box-shadow':'0px 4px 10px rgba(0, 0, 0, 0.05',
                });
            } else {
                $('header').css({
                    'padding':'30px 0',
                    'background':'none',
                    'box-shadow':'none',
                });
            };
        }
    });



    //mobile nav
	$('.nav-icon').click(function(){
		$(this).toggleClass('open');
	});

    
    if(windowWidth < 1024){
    }else{
        $('nav').removeClass('open');
        $('body').removeClass('hidden');
    }

    $('.nav-icon').click(function(){
        $('nav').toggleClass('open');
        $('body').toggleClass('hidden');
    });
    

    //header
    $('.about').click(function(){
        $('nav.open').removeClass('open');
        $('button.nav-icon').removeClass('open');
        $('body').removeClass('hidden');
        $('html, body').animate({
            scrollTop: $('#about').offset().top
        }, 800);
    });
    $('.service').click(function(){
        $('nav.open').removeClass('open');
        $('button.nav-icon').removeClass('open');
        $('body').removeClass('hidden');
        $('html, body').animate({
            scrollTop: $('#service').offset().top
        }, 800);
    });
    $('.starter').click(function(){
        $('nav.open').removeClass('open');
        $('button.nav-icon').removeClass('open');
        $('body').removeClass('hidden');
        $('html, body').animate({
            scrollTop: $('#starter').offset().top
        }, 800);
    });

    //聯絡我們 btn
    $('a.cta-btn').click(function(){
        $('nav.open').removeClass('open');
        $('button.nav-icon').removeClass('open');
        $('body').removeClass('hidden');
        $('html, body').animate({
            scrollTop: $('#starter').offset().top
        }, 800);
    });


    //language
    $(".language button").click(function(){
        $(".language ul").delay().slideToggle();
        $(".ic-arrow").toggleClass("rotate-180");
    })
});







