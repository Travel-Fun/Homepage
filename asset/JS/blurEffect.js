 $(window).on('scroll', function () {
    var pixs = $(document).scrollTop()
    pixs = pixs / 100;

    var scroll;
    $(window).scroll(function (event) {
    scroll = $(window).scrollTop();
    console.log(scroll);
 *if(scroll>606)
    {
    $(".out").css({"-webkit-filter": "blur("+pixs+"px)","filter": "blur("+pixs+"px)" })    
    }*

});


});