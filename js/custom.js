jQuery(function ($) {
   "use strict";



   $(window).on('load', function () {
      checkScreenSize();
      menuFixed();
   });


   function menuFixed() {
      var wWidth = $(window).width();
      if (wWidth > 974) {
         if ($('#header-2 .site-nav-inner').length) {
            var sticky = $('#header-2 .site-nav-inner'),
               scroll = $(window).scrollTop();

            if (scroll >= 400) sticky.addClass('fixed');
            else sticky.removeClass('fixed');

         };
      }
   }
   $(document).on('scroll', function () {
      menuFixed();
   });

         

   $(".dropdown-menu li").on("click", function () {
      $(".dropdown-menu li").removeClass("active");
      $(this).addClass("active");
   });

   function checkScreenSize() {
      var newWindowWidth = $(window).width();
      if (newWindowWidth < 991) {
         $("li.nav-item a").on("click", function () {
            $(this).parent("li").find(".dropdown-menu").slideToggle();
            $(this).find("i").toggleClass("fa-angle-down fa-angle-up");
         });
      } else {
         $("li.nav-item a").on("click", function () {
            console.log('do nothing');
         });
      }
   }




   $('#main-slide').carousel({
      pause: true,
      interval: 6000,
   });


   $(".testimonial-slide").owlCarousel({

      loop: true,
      autoplay: false,
      autoplayHoverPause: true,
      nav: true,
      margin: 0,
      dots: false,
      mouseDrag: true,
      touchDrag: true,
      smartSpeed: 900,
      navText: ["<i class='icon icon-left-arrow2'></i>", "<i class='icon icon-right-arrow2'></i>"],
      items: 1,
      responsive: {
         0: {
            items: 1,
            nav: false,
         },
         600: {
            items: 1,
            nav: false,
         },
         1000: {
            nav: true,
         }
      }

   });


   $("#partners-carousel").owlCarousel({
      loop: true,
      autoplay: false,
      autoplayHoverPause: true,
      nav: true,
      dots: false,
      mouseDrag: true,
      touchDrag: true,
      smartSpeed: 900,
      navText: ["<i class='icon icon-left-arrow2'></i>", "<i class='icon icon-right-arrow2'></i>"],
      items: 5,
      responsive: {
         0: {
            items: 2,
            nav: false,
         },
         600: {
            items: 2,
            nav: false,
         },
         1000: {
            items: 5
         }
      }

   });


   $(".page-slider").owlCarousel({
      loop: true,
      autoplay: true,
      autoplayHoverPause: true,
      nav: true,
      margin: 0,
      dots: false,
      mouseDrag: true,
      touchDrag: true,
      smartSpeed: 800,
      navText: ["<i class='icon icon-left-arrow2'></i>", "<i class='icon icon-right-arrow2'></i>"],
      items: 1,
      responsive: {
         0: {
            items: 1,
            nav: false,
         },
         600: {
            items: 1,
            nav: false,
         },
         1000: {
            items: 1,
            nav: true,
         }
      }

   });

   $(".featured-cases-slide").owlCarousel({

      loop: false,
      autoplay: false,
      autoplayHoverPause: true,
      nav: true,
      margin: 0,
      dots: false,
      mouseDrag: true,
      touchDrag: true,
      smartSpeed: 900,
      navText: ["<i class='icon icon-left-arrow2'></i>", "<i class='icon icon-right-arrow2'></i>"],
      items: 1,
      responsive: {
         0: {
            items: 1,
            nav: false,
         },
         600: {
            items: 1,
            nav: false,
         },
         1000: {
            animateOut: 'fadeOut',
         }
      }

   });

   $(document).ready(function () {

      $(".gallery-popup").colorbox({
         rel: 'gallery-popup',
         transition: "fade",
         innerHeight: "500"
      });

      $(".popup").colorbox({
         iframe: true,
         innerWidth: 600,
         innerHeight: 400
      });

   });



   $('.counterUp').counterUp({
      delay: 10,
      time: 1000
   });


   $('#contact-form').submit(function () {

      var $form = $(this),
         $error = $form.find('.error-container'),
         action = $form.attr('action');

      $error.slideUp(750, function () {
         $error.hide();

         var $name = $form.find('.form-name'),
            $phone = $form.find('.form-phone'),
            $email = $form.find('.form-email'),
            $message = $form.find('.form-message');

         $.post(action, {
               name: $name.val(),
               phone: $phone.val(),
               email: $email.val(),
               message: $message.val()
            },
            function (data) {
               $error.html(data);
               $error.slideDown('slow');

               if (data.match('success') != null) {
                  $name.val('');
                  $phone.val('');
                  $email.val('');
                  $message.val('');
               }
            }
         );

      });

      return false;

   });


   function toggleIcon(e) {
      $(e.target)
         .prev('.panel-heading')
         .find(".fa")
         .toggleClass('fa-angle-up fa-angle-down ');
   }
   $('.panel-group').on('hidden.bs.collapse', toggleIcon);
   $('.panel-group').on('shown.bs.collapse', toggleIcon);


   $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
             $('#back-to-top').fadeIn();
      } else {
             $('#back-to-top').fadeOut();
            }
      });

      $('#back-to-top').on('click', function () {
            $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                  scrollTop: 0
            }, 800);
            return false;
      });

      $('#back-to-top').tooltip('hide');



   if ($('.carrer-gallery-layout').length > 0) {
      $('.carrer-gallery-layout').packery({
         percentPosition: true,
         gutter: 10,
      })
   }

   

});