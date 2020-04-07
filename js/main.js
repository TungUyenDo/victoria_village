$(document).ready(function(){

    var pageAnchors = [];
    var pageSections = [];
    var pageSectionDivs = $('.fullpage .section');
    var mainPage = $('.fullpage');


    if (mainPage.width()) {
        /*config fullpage.js*/
        mainPage.fullpage({
            menu: "#navigation",
            lockAnchors: !1,
            navigation: true,
            navigationPosition: 'right',
            scrollingSpeed: 500,
            autoScrolling: !0,
            fitToSection: !0,
            fitToSectionDelay: 500,
            scrollBar: !1,
            easing: 'easeInOutCubic',
            easingcss3: 'ease',
            css3: true,
            easing: 'easeInOutCubic',
            loopBottom: !1,
            loopTop: !1,
            animateAnchor: !0,
            recordHistory: !1,
            controlArrows: !1,
            verticalCentered: !1,
            paddingTop: !1,
            paddingBottom: !1,
            sectionSelector: ".section",
            normalScrollElements: '.section-scroll',
            responsiveWidth: 768,
            afterResponsive: function(isResponsive){

            },
            afterResize: function () {
                var pluginContainer = $(this);
                $.fn.fullpage.reBuild();
            },
            //events
            onLeave: function(origin, destination, direction, index){},
            afterLoad: function(origin, destination, direction){
                if(origin != 'section01'){
                    $('.btn_toTop').addClass('active')
                }else{
                    $('.btn_toTop').removeClass('active')
                }
            },
            afterRender: function(){},
            afterReBuild: function(){},
            afterResponsive: function(isResponsive){},
            afterSlideLoad: function(section, origin, destination, direction){},
            onSlideLeave: function(section, origin, destination, direction, index){}
        });

    }

    $('.navigationToggle').click(function(){
        $(this).closest('.site-header').toggleClass('active');
        $('#fp-nav').fadeOut();
        $('.navigationToggle').fadeOut();
    })

    $('.closeMenu').click(function(){
        $(this).closest('.site-header').removeClass('active');
        $('#fp-nav').show();
        $('.navigationToggle').show();
    })


    sliderFunction('section_01')
    sliderFunction('section_06')
    function sliderFunction(numberSection ){
        $("" + '.'+ numberSection +" .slider_bg").not('.slick-initialized').slick({
            dots: false,
            arrows: true,
            infinite: false,
            infinite:true,
            speed: 300,
            fade:true,
            cssEase:'ease',
            speed:1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            prevArrow: '<span class="slick-prev slick-arrow"><img src="./assets/images/arrow-right.png"></i></span>',
			nextArrow: '<span class="slick-next slick-arrow"><img src="./assets/images/arrow-right.png"></i></span>',
        });
    }

    sliderMbFunction('section_01')
    sliderMbFunction('section_06')
    function sliderMbFunction(numberSection ){
        $("" + '.'+ numberSection +" .slider_image_mb").not('.slick-initialized').slick({
            dots: false,
            arrows: true,
            infinite: false,
            infinite:true,
            speed: 300,
            fade:true,
            cssEase:'ease',
            speed:1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            prevArrow: '<span class="slick-prev slick-arrow"><img src="./assets/images/arrow-right.png"></i></span>',
			nextArrow: '<span class="slick-next slick-arrow"><img src="./assets/images/arrow-right.png"></i></span>',
        });
    }
    

    
})