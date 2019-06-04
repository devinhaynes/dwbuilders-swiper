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
}
var mainSwiper = new Swiper ('#main-swiper', {
  // Optional parameters
  direction: 'vertical',

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  centeredSlides: true,    

  //Slides on page
  slidesPerView: 1,
  hashNavigation: true,
})

var introSwiper = new Swiper ('.internal-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  centeredSlides: false,    

  //Slides on page
  slidesPerView: 2,
  breakpoints: {
    768: {
        slidesPerView: 1,
        centeredSlides: true,
    },
  },
})