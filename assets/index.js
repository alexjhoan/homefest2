$(window).on('load', function () {
  $('body').css('opacity', '1');
});

let offset

if (screen.width > 768){
  offset = 200
} else {
  offset = 0
}

new WOW({offset:offset, scrollContainer: null}).init()

$('header').load('components/header.html')
$('footer').load('components/footer.html')

// ------------------------------Banner-----------------------------
const swiperbanner = new Swiper(".swiper-banner", {
  spaceBetween: 4,
  loop: true,
  slidesPerView: 1,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
// ------------------------------Evento Areas-----------------------------
$('.areas .areas_grid .item').each(function(){
  $(this).click(function(){
    $(this).find('ul').toggleClass('list-active')
  })
});
