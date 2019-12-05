
 newFunction();

function newFunction() {
    $('.slider__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.slider__nav',
        autoplaySpeed: 2000,
        infinity: true,
    });
    $('.slider__nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider__inner',
        dots: false,
        variableWidth: true,        
        focusOnSelect: true,
        responsive: [
            {
              breakpoint: 970,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
              }
            },
            {
                breakpoint: 820,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                }
              },
          ]
    });
    $('.mobile__menu-logo').on('click', function(){
        // console.log("Hello world!"); 
        $('.header__menu').slideToggle();//slideToggle change display none to display block
    });
  
}
