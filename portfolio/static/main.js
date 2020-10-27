$(window).on("load",function(){
    $(".about-content").css("opacity", "1");
    });

    $(window).on("scroll",function(){
        //offsets
    var winTop = $(this).scrollTop();
    var project1 = $("#project1").offset().top;
    var project2 = $("#project-2").offset().top;
    var project3 = $("#project-3").offset().top;
    var about = $("#about").offset().top;
    var skill = $("#skill").offset().top;
    var service = $("#service").offset().top;

    if(winTop >= winTop-1) {
        $(".fa-arrow-circle-down").addClass("invisible")
    }


    if (window.innerWidth < 600){
        $(".project1-img").removeClass("invisible");
        $(".project1").removeClass("invisible");
        $(".project2-img").removeClass("invisible");
        $(".project2").removeClass("invisible");
        $(".project3-img").removeClass("invisible");
        $(".project3").removeClass("invisible");
        $(".aboutme").removeClass("invisible");
        $(".about-content").removeClass("invisible");
        $(".skill-title").removeClass("invisible");
        $(".skill").removeClass("invisible");
        $(".service-title").removeClass("invisible");
        $(".service1").removeClass("invisible");
        $(".service2").removeClass("invisible");

    }

    else {
              //project section
          if(winTop >= project1-180) {
              $(".project1-img").removeClass("invisible").addClass("animate__animated animate__fadeInLeft");
              $(".project1").removeClass("invisible").addClass("animate__animated animate__fadeInRight");
          }
           if(winTop >= project2-180) {
              $(".project2-img").removeClass("invisible").addClass("animate__animated animate__fadeInRight");
              $(".project2").removeClass("invisible").addClass("animate__animated animate__fadeInLeft");
          }

           if(winTop >= project3-180) {
              $(".project3-img").removeClass("invisible").addClass("animate__animated animate__fadeInLeft");
              $(".project3").removeClass("invisible").addClass("animate__animated animate__fadeInRight");
          }


        //animated classes
        //about section
    if(winTop >= about-180) {
        $(".aboutme").removeClass("invisible").addClass("animate__animated animate__fadeInDown animate__faster");
        $(".about-content").removeClass("invisible").addClass("animate__animated animate__fadeInUp animate__faster");
    }

    if(winTop >=skill-250) {
        $(".skill-title").removeClass("invisible").addClass("animate__animated animate__fadeInDown animate__delay-0.5s animate__faster");
        $(".skill").removeClass("invisible").addClass("animate__animated animate__pulse animate__delay-1s animate__faster");

    }
    if(winTop >= service-400){
        $(".service-title").removeClass("invisible").addClass("animate__animated animate__fadeInDown animate__delay-0.5s animate__faster");
        $(".service1").removeClass("invisible").addClass("animate__animated animate__fadeInLeftBig ");
        $(".service2").removeClass("invisible").addClass("animate__animated animate__fadeInRightBig ");

    }}
});

    function toggleHidden(divId) {
        row = document.getElementById(divId);
        if (row.style.display === 'none') {
            row.style.display = 'block'
        } else {
            row.style.display = 'none'
        }
    }

var slideIndex1 = 1;
showSlides1(slideIndex1);


function plusSlides1(n) {
  showSlides1(slideIndex1 += n);
}

function currentSlide1(n) {
  showSlides1(slideIndex1 = n);
}

function showSlides1(n) {
  var i;
  var slides = document.getElementsByClassName("slides1");
  var dots = document.getElementsByClassName("dot1");
  if (n > slides.length) {
     slideIndex1 = 1
  }
  if (n < 1) {slideIndex1 = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex1-1].style.display = "block";
  dots[slideIndex1-1].className += " active";
}

var slideIndex2 = 1;
showSlides2(slideIndex2)

function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
  var i;
  var slides = document.getElementsByClassName("slides2");
  var dots = document.getElementsByClassName("dot2");
  if (n > slides.length) {
     slideIndex2 = 1
  }
  if (n < 1) {slideIndex2 = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex2-1].style.display = "block";
  dots[slideIndex2-1].className += " active";
}

var slideIndex3 = 1;
showSlides3(slideIndex3)

function plusSlides3(n) {
  showSlides3(slideIndex3 += n);
}

function currentSlide3(n) {
  showSlides3(slideIndex3 = n);
}

function showSlides3(n) {
  var i;
  var slides = document.getElementsByClassName("slides3");
  var dots = document.getElementsByClassName("dot3");
  if (n > slides.length) {
     slideIndex3 = 1
  }
  if (n < 1) {slideIndex3 = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex3-1].style.display = "block";
  dots[slideIndex3-1].className += " active";
}



   window.onscroll = function () {
      scrollFunction()
   };

   function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
         document.getElementById("navbar").style.top = "0";
      } else {
         document.getElementById("navbar").style.top = "-50px";
      }
   }
