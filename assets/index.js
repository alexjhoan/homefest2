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
  spaceBetween: 0,
  loop: true,
  slidesPerView: 1,
    // autoplay: {
    //   delay: 4000,
    //   disableOnInteraction: false,
    // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  on: {
    slideChangeTransitionStart: function () {
      $('.banner_title').hide(0);
      $('.banner_title').removeClass('animated');
    },
    slideChangeTransitionEnd: function () {
      $('.swiper-slide-active .banner_title').show(0).addClass('animated');
    },
  }
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
    $(".activity_gallery").addClass("swiper-wrapper")
    $(".activity_gallery_item").addClass("swiper-slide")
      const mygallery = new Swiper(".swiper-gallery", {
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


//-- ------------------------------Forms--------------------------------

function sendForm(formId) {
  'use strict'
  const form = document.querySelector(`#${formId}`)
  const data = {
    nombre: form.firstname.value,
    email: form.email.value,
    telefono: form.phone.value,
    cantidad: formId == "contactForm" ? "" : form.cantidad.value ,
    source: 2,
    utm_source: "web_cliente",
    utm_medium: "home_fest",
    InfoLeads: 1,
    IDflow_execution: 4315
  }
  if (!form.checkValidity()) {
    event.preventDefault()
    event.stopPropagation()
  }else{
    fetch(`https://www.infocasas.com.uy/gracias/lanzamiento-home-fest?nombre=${data.nombre}&email=${data.email}&telefono=${data.telefono}&utm_source=web_cliente&utm_medium=home_fest`)
    .then((json) => {
      setTimeout(()=>{
        if (json.status === 200) {
          $(form).siblings('#formSuccess').fadeIn();
        } else {
          $(form).siblings('#formError').fadeIn();
        }
        $(form).siblings('#formSending').hide();
      }, 2000)
    })
    .catch(error => {
      console.log('error', error);
      setTimeout(() => {
        $(form).siblings('#formSending').hide();
        $(form).siblings('#formError').fadeIn();
      }, 2000)
    });
    setTimeout(()=>{
      $(form).fadeOut();
      $(form).siblings('#formSending').fadeIn();
    },300)
  }
  form.classList.add('was-validated')
}
