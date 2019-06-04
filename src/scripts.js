window.onload = () => {
    $('#hamburger').click(() => {
        let el = $('#dropdown');

        //Display dropdown
        if(el.width() == 0) {
            $(el).show();
            $(el).width($('main').width());
            $(el).css('right', $('main').css('right'));
            $('#nav-icon').removeClass('fa-bars');
            $('#nav-icon').addClass('fa-times');
        } else { //Hide dropdown
            $(el).fadeOut();
            $(el).width('0');
            $(el).css('right', $('main').css('right'));
            $('#nav-icon').removeClass('fa-times');
            $('#nav-icon').addClass('fa-bars');
        }        
    })
    //Hide on link click
    $('#dropdown li').click(() => {
        $('#dropdown').hide();
        $('#dropdown').width('0');
        $('#dropdown').css('right', $('main').css('right'));
        $('#nav-icon').removeClass('fa-times');
        $('#nav-icon').addClass('fa-bars');
    })

    //Hide dropdown menu on window resize
    $(window).resize(() => {
        if($('#dropdown').width() > 0) {
            $('#dropdown').hide();
            $('#dropdown').width('0');
            $('#dropdown').css('right', $('main').css('right'));
            $('#nav-icon').removeClass('fa-times');
            $('#nav-icon').addClass('fa-bars');
        }        
    })

    $('.btn-about').click(() => {
        console.log('about button clicked');
        mainSwiper.slideTo(0);
        
    })

    $('.btn-services').click(() => {
        console.log('services button clicked');
        mainSwiper.slideTo(1);        
    })

    $('.btn-gallery').click(() => {
        console.log('gallery button clicked');
        mainSwiper.slideTo(3);
        
    })
}