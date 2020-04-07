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

    // $('.selectUltilites figure').click(function(){
    //     $('#Utilities').modal('show');
    //     var href = $(this).attr('href');
    //     var figure = '<figure><img src="' + href + '"></figure>'
    //     $('#Utilities .modal-body').html(figure);
    // })

    /*slider bg section 1*/
    sliderBg('section_01');
    sliderBg('section_06');
    function sliderBg(numberSection){
        var slider = $("" + '.'+ numberSection +" .slider_bg .slider");
        var i = 0;
        function iterate() {
            if ( i >= slider.length) {
                i = 0;
            }
            
            $("" + '.'+ numberSection +" .slider").removeClass("show");
            $(slider[i]).addClass("show");
            
            i++;
        }
        setInterval( iterate,4000 );
    }


    /*mobile*/
    sliderBgMb('section_01');
    sliderBgMb('section_06');
    function sliderBgMb(numberSection){
        var slider = $("" + '.'+ numberSection +" .slider_image_mb .slider_mb");
        var i = 0;
        function iterate() {
            if ( i >= slider.length) {
                i = 0;
            }
            
            $("" + '.'+ numberSection +" .slider_mb").removeClass("show");
            $(slider[i]).addClass("show");
            
            i++;
        }
        setInterval( iterate,4000 );
    }
    
})