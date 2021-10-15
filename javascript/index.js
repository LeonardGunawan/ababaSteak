$(document).ready(function(){
    $("#grid1").click(function(){
        $("#panel").slideToggle("slow");
    });
    $("#grid2").click(function(){
        $("#panel2").slideToggle("slow");
    });
    $("#grid3").click(function(){
        $("#panel3").slideToggle("slow");
      });
    $("#grid4").click(function(){
        $("#panel4").slideToggle("slow");
      });
    var slideCount = $('.panel .slider div.slides div.slide').length
    var slideWidth = $('.panel .slider div.slides div.slide').width()
    var slideHeight = $('.panel .slider div.slides div.slide').height()
    var totalWidth = slideCount * slideWidth

    $('.panel .slider').css({width : slideWidth, height: slideHeight})
    $('.panel .slider div.slides').css({width: totalWidth, marginLeft: -slideWidth})
    $('.panel .slider div.slides div.slide:last-child').prependTo('.panel .slider div.slides')

    $('#prev').click(function(){
        $('.slider div.slides').animate({
            left: slideWidth
        }, 1000, function(){
            $('.slider div.slides div.slide:last-child').prependTo('.slider div.slides')
            $('.slider div.slides').css({left: ''})
        })
    })

    $('#next').click(function(){
        $('.slider div.slides').animate({
            left: -slideWidth
        }, 1000, function(){
            $('.slider div.slides div.slide:first-child').appendTo('.slider div.slides')
            $('.slider div.slides').css({left: ''})
        })
    })

    // for slider 2
    var slideCount2 = $('.panel .slider2 div.slides2 div.slide2').length
    var slideWidth2 = $('.panel .slider2 div.slides2 div.slide2').width()
    var slideHeight2 = $('.panel .slider2 div.slides2 div.slide2').height()
    var totalWidth2 = slideCount2 * slideWidth2

    $('.panel.slider2').css({width : slideWidth2, height: slideHeight2})
    $('.panel .slider2 div.slides2').css({width: totalWidth2, marginLeft: -slideWidth2})
    $('.panel .slider2 div.slides2 div.slide2:last-child').prependTo('.panel .slider2 div.slides2')

    $('#prev2').click(function(){
        $('.slider2 div.slides2').animate({
            left: slideWidth2
        }, 1000, function(){
            $('.slider2 div.slides2 div.slide2:last-child').prependTo('.slider2 div.slides2')
            $('.slider2 div.slides2').css({left: ''})
        })
    })

    $('#next2').click(function(){
        $('.slider2 div.slides2').animate({
            left: -slideWidth2
        }, 1000, function(){
            $('.slider2 div.slides2 div.slide2:first-child').appendTo('.slider2 div.slides2')
            $('.slider2 div.slides2').css({left: ''})
        })
    })

    // for slider 3
    var slideCount3 = $('.panel .slider3 div.slides3 div.slide3').length
    var slideWidth3 = $('.panel .slider3 div.slides3 div.slide3').width()
    var slideHeight3 = $('.panel .slider3 div.slides3 div.slide3').height()
    var totalWidth3 = slideCount3 * slideWidth3

    $('.panel.slider3').css({width : slideWidth3, height: slideHeight3})
    $('.panel .slider3 div.slides3').css({width: totalWidth3, marginLeft: -slideWidth3})
    $('.panel .slider3 div.slides3 div.slide3:last-child').prependTo('.panel .slider3 div.slides3')

    $('#prev3').click(function(){
        $('.slider3 div.slides3').animate({
            left: slideWidth3
        }, 1000, function(){
            $('.slider3 div.slides3 div.slide3:last-child').prependTo('.slider3 div.slides3')
            $('.slider3 div.slides3').css({left: ''})
        })
    })

    $('#next3').click(function(){
        $('.slider3 div.slides3').animate({
            left: -slideWidth3
        }, 1000, function(){
            $('.slider3 div.slides3 div.slide3:first-child').appendTo('.slider3 div.slides3')
            $('.slider3 div.slides3').css({left: ''})
        })
    })

    // for slider 4
    var slideCount4 = $('.panel .slider4 div.slides4 div.slide4').length
    var slideWidth4 = $('.panel .slider4 div.slides4 div.slide4').width()
    var slideHeight4 = $('.panel .slider4 div.slides4 div.slide4').height()
    var totalWidth4 = slideCount4 * slideWidth4

    $('.panel.slider4').css({width : slideWidth4, height: slideHeight4})
    $('.panel .slider4 div.slides4').css({width: totalWidth4, marginLeft: -slideWidth4})
    $('.panel .slider4 div.slides4 div.slide4:last-child').prependTo('.panel .slider4 div.slides4')

    $('#prev4').click(function(){
        $('.slider4 div.slides4').animate({
            left: slideWidth4
        }, 1000, function(){
            $('.slider4 div.slides4 div.slide4:last-child').prependTo('.slider4 div.slides4')
            $('.slider4 div.slides4').css({left: ''})
        })
    })

    $('#next4').click(function(){
        $('.slider4 div.slides4').animate({
            left: -slideWidth4
        }, 1000, function(){
            $('.slider4 div.slides4 div.slide4:first-child').appendTo('.slider4 div.slides4')
            $('.slider4 div.slides4').css({left: ''})
        })
    })
});
