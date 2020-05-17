(function ($)
  { "use strict"
  
/* 1. Proloder */
    $(window).on('load', function () {
      $('#preloader-active').delay(450).fadeOut('slow');
      $('body').delay(450).css({
        'overflow': 'visible'
      });
    });


/* 2. slick Nav */
// mobile_menu
    var menu = $('ul#navigation');
    if(menu.length){
      menu.slicknav({
        prependTo: ".mobile_menu",
        closedSymbol: '+',
        openedSymbol:'-'
      });
    };


/* 3. MainSlider-1 */
    function mainSlider() {
      var BasicSlider = $('.slider-active');
      BasicSlider.on('init', function (e, slick) {
        var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
        doAnimations($firstAnimatingElements);
      });
      BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
        var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
        doAnimations($animatingElements);
      });
      BasicSlider.slick({
        autoplay: false,
        autoplaySpeed: 10000,
        dots: false,
        fade: true,
        arrows: false,
        prevArrow: '<button type="button" class="slick-prev"><i class="ti-shift-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="ti-shift-right"></i></button>',
        responsive: [{
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false
            }
          }
        ]
      });

      function doAnimations(elements) {
        var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        elements.each(function () {
          var $this = $(this);
          var $animationDelay = $this.data('delay');
          var $animationType = 'animated ' + $this.data('animation');
          $this.css({
            'animation-delay': $animationDelay,
            '-webkit-animation-delay': $animationDelay
          });
          $this.addClass($animationType).one(animationEndEvents, function () {
            $this.removeClass($animationType);
          });
        });
      }
    }
    mainSlider();



/* 4. Testimonial Active*/
  var testimonial = $('.h1-testimonial-active');
    if(testimonial.length){
    testimonial.slick({
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay:true,
        loop:true,
        arrows: false,
        prevArrow: '<button type="button" class="slick-prev"><i class="ti-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="ti-angle-right"></i></button>',
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              arrow:false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows:false
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows:false,
            }
          }
        ]
      });
    }


/* 5. Gallery Active */
    var client_list = $('.completed-active');
    if(client_list.length){
      client_list.owlCarousel({
        slidesToShow: 2,
        slidesToScroll: 1,
        loop: true,
        autoplay:true,
        speed: 3000,
        smartSpeed:2000,
        nav: false,
        dots: false,
        margin: 15,

        autoplayHoverPause: true,
        responsive : {
          0 : {
            items: 1
          },
          768 : {
            items: 2
          },
          992 : {
            items: 2
          },
          1200:{
            items: 3
          }
        }
      });
    }


/* 6. Nice Selectorp  */
  var nice_Select = $('select');
    if(nice_Select.length){
      nice_Select.niceSelect();
    }

/* 7.  Custom Sticky Menu  */
    $(window).on('scroll', function () {
      var scroll = $(window).scrollTop();
      if (scroll < 245) {
        $(".header-sticky").removeClass("sticky-bar");
      } else {
        $(".header-sticky").addClass("sticky-bar");
      }
    });

    $(window).on('scroll', function () {
      var scroll = $(window).scrollTop();
      if (scroll < 245) {
          $(".header-sticky").removeClass("sticky");
      } else {
          $(".header-sticky").addClass("sticky");
      }
    });



/* 8. sildeBar scroll */
    $.scrollUp({
      scrollName: 'scrollUp', // Element ID
      topDistance: '300', // Distance from top before showing element (px)
      topSpeed: 300, // Speed back to top (ms)
      animation: 'fade', // Fade, slide, none
      animationInSpeed: 200, // Animation in speed (ms)
      animationOutSpeed: 200, // Animation out speed (ms)
      scrollText: '<i class="ti-arrow-up"></i>', // Text for element
      activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });


/* 9. data-background */
    $("[data-background]").each(function () {
      $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
      });


/* 10. WOW active */
    new WOW().init();

/* 11. Datepicker */
    
// 11. ---- Mailchimp js --------//  
    function mailChimp() {
      $('#mc_embed_signup').find('form').ajaxChimp();
    }
    mailChimp();


// 12 Pop Up Img
    var popUp = $('.single_gallery_part, .img-pop-up');
      if(popUp.length){
        popUp.magnificPopup({
          type: 'image',
          gallery:{
            enabled:true
          }
        });
      }


    // NEW STUFF FOR MY PROJECTS, BOTH DESIGN AND CODING!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // Adding a Pop-Up (Project 1) Porsche Car Connect
    // Get the modal
    var modal = document.getElementById("myModal");
    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal 
    btn.onclick = function () {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }





    // Adding a Pop-Up (Project 2) Privaseeable
    // Get the modal
    var modal2 = document.getElementById("myModal2");
    // Get the button that opens the modal
    var btn2 = document.getElementById("myBtn2");
    // Get the <span> element that closes the modal
    var span2 = document.getElementsByClassName("close2")[0];

    // When the user clicks on the button, open the modal 
    btn2.onclick = function () {
        modal2.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span2.onclick = function () {
        modal2.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal2) {
            modal2.style.display = "none";
        }
    }

    // Adding a Pop-Up (Project 3) Mood Playlist
    // Get the modal
    var modal3 = document.getElementById("myModal3");
    // Get the button that opens the modal
    var btn3 = document.getElementById("myBtn3");
    // Get the <span> element that closes the modal
    var span3 = document.getElementsByClassName("close3")[0];

    // When the user clicks on the button, open the modal 
    btn3.onclick = function () {
        modal3.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span3.onclick = function () {
        modal3.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal3) {
            modal3.style.display = "none";
        }
    }


    // Adding a Pop-Up (Project 4) Personal Portfolio
    // Get the modal
    var modal4 = document.getElementById("myModal4");
    // Get the button that opens the modal
    var btn4 = document.getElementById("myBtn4");
    // Get the <span> element that closes the modal
    var span4 = document.getElementsByClassName("close4")[0];

    // When the user clicks on the button, open the modal 
    btn4.onclick = function () {
        modal4.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span4.onclick = function () {
        modal4.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal4) {
            modal4.style.display = "none";
        }
    }


    // Adding a Pop-Up (Project 5) Math It
    // Get the modal
    var modal5 = document.getElementById("myModal5");
    // Get the button that opens the modal
    var btn5 = document.getElementById("myBtn5");
    // Get the <span> element that closes the modal
    var span5 = document.getElementsByClassName("close5")[0];

    // When the user clicks on the button, open the modal 
    btn5.onclick = function () {
        modal5.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span5.onclick = function () {
        modal5.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal5) {
            modal5.style.display = "none";
        }
    }

    // Adding a Pop-Up (Project 6) ML Model Training
    // Get the modal
    var modal6 = document.getElementById("myModal6");
    // Get the button that opens the modal
    var btn6 = document.getElementById("myBtn6");
    // Get the <span> element that closes the modal
    var span6 = document.getElementsByClassName("close6")[0];

    // When the user clicks on the button, open the modal 
    btn6.onclick = function () {
        modal6.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span6.onclick = function () {
        modal6.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal6) {
            modal6.style.display = "none";
        }
    }

    // Adding a Pop-Up (Project 7) RaceIt
    // Get the modal
    var modal7 = document.getElementById("myModal7");
    // Get the button that opens the modal
    var btn7 = document.getElementById("myBtn7");
    // Get the <span> element that closes the modal
    var span7 = document.getElementsByClassName("close7")[0];

    // When the user clicks on the button, open the modal 
    btn7.onclick = function () {
        modal7.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span7.onclick = function () {
        modal7.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal7) {
            modal7.style.display = "none";
        }
    }

    // Adding a Pop-Up (Project 8) Minion Run
    // Get the modal
    var modal8 = document.getElementById("myModal8");
    // Get the button that opens the modal
    var btn8 = document.getElementById("myBtn8");
    // Get the <span> element that closes the modal
    var span8 = document.getElementsByClassName("close8")[0];

    // When the user clicks on the button, open the modal 
    btn8.onclick = function () {
        modal8.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span8.onclick = function () {
        modal8.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal8) {
            modal8.style.display = "none";
        }
    }



    // DESIGN PROJECTS //
    // Adding a Pop-Up (Project 1) Dream Big Piece
    // Get the modal
    var modald1 = document.getElementById("myModald1");
    // Get the button that opens the modal
    var btnd1 = document.getElementById("myBtnd1");
    // Get the <span> element that closes the modal
    var spand1 = document.getElementsByClassName("closed1")[0];

    // When the user clicks on the button, open the modal 
    btnd1.onclick = function () {
        modald1.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    spand1.onclick = function () {
        modald1.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modald1) {
            modald1.style.display = "none";
        }
    }


    // Adding a Pop-Up (Project 2) Dior X Kaws Piece
    // Get the modal
    var modald2 = document.getElementById("myModald2");
    // Get the button that opens the modal
    var btnd2 = document.getElementById("myBtnd2");
    // Get the <span> element that closes the modal
    var spand2 = document.getElementsByClassName("closed2")[0];

    // When the user clicks on the button, open the modal 
    btnd2.onclick = function () {
        modald2.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    spand2.onclick = function () {
        modald2.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modald2) {
            modald2.style.display = "none";
        }
    }


    // Adding a Pop-Up (Project 3) Gucci Piece
    // Get the modal
    var modald3 = document.getElementById("myModald3");
    // Get the button that opens the modal
    var btnd3 = document.getElementById("myBtnd3");
    // Get the <span> element that closes the modal
    var spand3 = document.getElementsByClassName("closed3")[0];

    // When the user clicks on the button, open the modal 
    btnd3.onclick = function () {
        modald3.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    spand3.onclick = function () {
        modald3.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modald3) {
            modald3.style.display = "none";
        }
    }


    // Adding a Pop-Up (Project 4) Avu Clothing
    // Get the modal
    var modald4 = document.getElementById("myModald4");
    // Get the button that opens the modal
    var btnd4 = document.getElementById("myBtnd4");
    // Get the <span> element that closes the modal
    var spand4 = document.getElementsByClassName("closed4")[0];

    // When the user clicks on the button, open the modal 
    btnd4.onclick = function () {
        modald4.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    spand4.onclick = function () {
        modald4.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modald4) {
            modald4.style.display = "none";
        }
    }


    // Adding a Pop-Up (Project 5) Sunset Illustration
    // Get the modal
    var modald5 = document.getElementById("myModald5");
    // Get the button that opens the modal
    var btnd5 = document.getElementById("myBtnd5");
    // Get the <span> element that closes the modal
    var spand5 = document.getElementsByClassName("closed5")[0];

    // When the user clicks on the button, open the modal 
    btnd5.onclick = function () {
        modald5.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    spand5.onclick = function () {
        modald5.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modald5) {
            modald5.style.display = "none";
        }
    }


    // Adding a Pop-Up (Project 6) Strange Fruits Cover Art #1
    // Get the modal
    var modald6 = document.getElementById("myModald6");
    // Get the button that opens the modal
    var btnd6 = document.getElementById("myBtnd6");
    // Get the <span> element that closes the modal
    var spand6 = document.getElementsByClassName("closed6")[0];

    // When the user clicks on the button, open the modal 
    btnd6.onclick = function () {
        modald6.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    spand6.onclick = function () {
        modald6.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modald6) {
            modald6.style.display = "none";
        }
    }

    // Adding a Pop-Up (Project 7) Strange Fruits Cover Art #2
    // Get the modal
    var modald7 = document.getElementById("myModald7");
    // Get the button that opens the modal
    var btnd7 = document.getElementById("myBtnd7");
    // Get the <span> element that closes the modal
    var spand7 = document.getElementsByClassName("closed7")[0];

    // When the user clicks on the button, open the modal 
    btnd7.onclick = function () {
        modald7.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    spand7.onclick = function () {
        modald7.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modald7) {
            modald7.style.display = "none";
        }
    }

    // Adding a Pop-Up (Project 9) Chief Wolf Clothing
    // Get the modal
    var modald9 = document.getElementById("myModald9");
    // Get the button that opens the modal
    var btnd9 = document.getElementById("myBtnd9");
    // Get the <span> element that closes the modal
    var span9 = document.getElementsByClassName("closed9")[0];

    // When the user clicks on the button, open the modal 
    btnd9.onclick = function () {
        modald9.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    spand9.onclick = function () {
        modald9.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modald9) {
            modald9.style.display = "none";
        }
    }


    let $btns = $('.project-area .button-group button');


    $btns.click(function (e) {

        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter: selector
        });

        return false;
    })


// Sticky Navigation Menu
let nav_offset_top = $('.header_area').height() + 50;

function navbarFixed(){
    if($('.header_area').length){
        $(window).scroll(function(){
            let scroll = $(window).scrollTop();
            if (scroll >= nav_offset_top){
                $('.header_area .main-menu').addClass('navbar_fixed');
            } else {
                $('.header_area .main-menu').removeClass('navbar_fixed');
            }
        })
    }
}

 navbarFixed();
 // END TO ALL OF MY BUTTON STUFF FOR CODING AND DESIGN PROJECTS!!!!!!!!!!!!!!!!!!



})(jQuery);
