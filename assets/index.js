$(window).on('load', function () {
  $('body').css('opacity', '1');

     $(".linkTo").click(function (e) {
    e.preventDefault()
    $("header .collapse.show").removeClass("show")
    const url = $(this).attr("href")
    const header = $("header").height()
    if (!url.includes("html")) {
      const section = $(url.slice(1)).offset().top;
      window.scrollTo({top: section - header,behavior: "smooth"});
    } else{
      window.location = url
    }
  })

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
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
// ------------------------------Evento Areas-----------------------------
$('.areas .areas_grid .item').each(function(){
  $(this).click(function(){
    $(this).find('ul').toggleClass('list-active')
    $(this).siblings().find('ul').removeClass('list-active')
  })
});

// ------------------------------Actividades-----------------------------
if (screen.width < 768) {
    $(".swiper-gallery").addClass("swiper")
    $(".actividad_gallery").addClass("swiper-wrapper")
    $(".img").addClass("swiper-slide")
      const mygallery = new Swiper(".swiper", {
        spaceBetween: 9,
        loop: true,
        slidesPerView: 1,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      })
  }
