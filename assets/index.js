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
//---------------------------------Tckets-------------------------------
function dataSubmite(data) {
  const requestOptions = {
    method: 'POST',
    body: data,
    headers: {
    'Content-type': 'application/json; charset=UTF-8',
    },
  };
  fetch("https://www.infocasas.com.uy/proyectos/osaka?&formulario=1&json=1", requestOptions)
  .then((json) => {
    setTimeout(()=>{
      if (json.status === 200) {
        $('#formSuccess').fadeIn();
      } else {
        $('#formError').fadeIn();
      }
      $('#formSending').hide();
    }, 2000)
  })
  .catch(error => {
    console.log('error', error);
    setTimeout(() => {
      $('#formSending').hide();
      $('#formError').fadeIn();
    }, 2000)
  });
}

function submite() {
 'use strict'
  const form = document.querySelector('#ticketsForm')
  const data = JSON.stringify({
    nombre: form.name.value,
    email: form.email.value,
    telefono: form.phone.value,
    tel: form.phone.value,
    cantidad: form.cantidad.value,
    seleccion: form.seleccion.value,
    source: 2,
    utm_source: "web_cliente",
    utm_medium: "austin",
    InfoLeads: 1,
    IDflow_execution: 4315
  })
  if (!form.checkValidity()) {
    event.preventDefault()
    event.stopPropagation()
  }else{
    dataSubmite(data)
    setTimeout(()=>{
      $(form).fadeOut();
      $('#formSending').fadeIn();
    },300)
  }
  form.classList.add('was-validated')
}


//---------------------------------Form-------------------------------
function dataSubmited(data) {
  const requestOptions = {
    method: 'POST',
    body: data,
    headers: {
    'Content-type': 'application/json; charset=UTF-8',
    },
  };
  fetch("https://www.infocasas.com.uy/proyectos/osaka?&formulario=1&json=1", requestOptions)
  .then((json) => {
    setTimeout(()=>{
      if (json.status === 200) {
        $('#formSuccess').fadeIn();
      } else {
        $('#formError').fadeIn();
      }
      $('#formSending').hide();
    }, 2000)
  })
  .catch(error => {
    console.log('error', error);
    setTimeout(() => {
      $('#formSending').hide();
      $('#formError').fadeIn();
    }, 2000)
  });
}

function submited() {
 'use strict'
  const form = document.querySelector('#contactForm')
  const data = JSON.stringify({
    nombre: form.name.value,
    apellido: "",
    email: form.email.value,
    telefono: form.phone.value,
    tel: form.phone.value,
    source: 2,
    utm_source: "web_cliente",
    utm_medium: "austin",
    InfoLeads: 1,
    IDflow_execution: 4315
  })
  if (!form.checkValidity()) {
    event.preventDefault()
    event.stopPropagation()
  }else{
    dataSubmited(data)
    setTimeout(()=>{
      $(form).fadeOut();
      $('#formSending').fadeIn();
    },300)
  }
  form.classList.add('was-validated')
}
