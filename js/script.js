$(function () {

  $('.menu-btn').click(function(){
    $('.menu-trigle').slideToggle("slow");

  });
});



// ------------------------------Scroll Revial

window.sr = ScrollReveal({ 
  reset: false,
  
});

// Customizing a reveal set
sr.reveal('.services-header,.skill-header,.work-header,.contact-header,.feedback-header,.contact-form', { 
  duration: 900,
  distance: '100px',
});


sr.reveal('.scrollRevial-left',{
  duration: 900,
  origin: 'left',
  distance: '200px',
});

sr.reveal('.scrollRevial-right',{
  duration: 900,
  origin: 'right',
  distance: '200px',
});

sr.reveal('.scrollRevial-center',{
  duration: 900,
  scale: 0.1,
  
});
sr.reveal('.scrollRevial-delay-0', { 
  duration: 900,
});

sr.reveal('.scrollRevial-delay-01', { 
  duration: 900,
  delay: 100,
});
sr.reveal('.scrollRevial-delay-02', { 
  duration: 900,
  delay: 200,
});
sr.reveal('.scrollRevial-delay-03', { 
  duration: 900,
  delay: 300,
});
sr.reveal('.scrollRevial-delay-04', { 
  duration: 900,
  delay: 400,
});

$(function() {
  $('.chart').easyPieChart({
    lineCap: 'butt',
    lineWidth: 10 ,
    size: 170,
  });
});


// фиксированное меню
$(window).scroll(function (event) {
  actualMenu();
});

function actualMenu() {

  if (pageYOffset >= document.querySelector('main').offsetTop) {
    $('#start').addClass('menu_fixed');
  }
  else {
    $('#start').removeClass('menu_fixed');
  }
}

// Плавный скролл

$('.intro-href').on('click', goToAnchor('#start')); //эту строку можно повторять для разных кнопок и анкеров

function goToAnchor(name){
  return function (event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $(name).offset().top
    }, 1000);
  };
}



