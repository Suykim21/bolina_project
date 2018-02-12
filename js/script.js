// To ensure to run when document is loaded
$(document).ready(function () {

  /*
  var waypoints = $('#handler-first').waypoint(function(direction) {
    notify(this.element.id + ' hit 25% from top of window') 
  }, {
    offset: '25%'
  })
  */

  /*
  // Scroll on links
  // when we click on that class
  $('.js--scroll-to-home').click(function() {
    // triggers animations which scrolls to the top of js--section-about in 1 second
    $('html, body').animate({scrollTop: $('.js--section-home').offset().top}, 1000);
  });
  */


  // Navigation Scroll
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function () {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });

  // Animation on Scroll

  // ABOUT ANIMATIONS
  $('.js--wp-about1').waypoint(function (direction) {
    $('.js--wp-about1').addClass('about_animated');
  }, {
    offset: '50%'
  });

  $('.js--wp-about1').waypoint(function (direction) {
    $('.js--wp-about2').addClass('about_animated about_animated--two');
  }, {
    offset: '50%'
  });

  $('.js--wp-about1').waypoint(function (direction) {
    $('.js--wp-about3').addClass('about_animated about_animated--three');
  }, {
    offset: '50%'
  });

  // SERVICE ANIMATIONS
  // SERVICES PICS

  $('.services').waypoint(function (direction) {
    console.log('im at services');
    $('.js--wp-services-pic1').addClass('services_animated');
  }, {
    offset: '10%'
  });

  $('.services').waypoint(function (direction) {
    $('.js--wp-services-pic2').addClass('services_animated');
  }, {
    offset: '10%'
  });

  $('.services').waypoint(function (direction) {
    $('.js--wp-services-pic3').addClass('services_animated');
  }, {
    offset: '10%'
  });

  // SERVICES DETAILS

  $('.services').waypoint(function (direction) {
    $('.js--wp-services-details1').addClass('services_animated--details');
  }, {
    offset: '10%'
  });

  $('.services').waypoint(function (direction) {
    $('.js--wp-services-details2').addClass('services_animated--details');
  }, {
    offset: '10%'
  });

  $('.services').waypoint(function (direction) {
    $('.js--wp-services-details3').addClass('services_animated--details');
  }, {
    offset: '10%'
  });

  // GALLERY ANIMATIONS
  $('.gallery').waypoint(function (direction) {
    $('.js--wp-projects1').addClass('gallery_animated');
  }, {
    offset: '40%'
  });

  $('.gallery').waypoint(function (direction) {
    $('.js--wp-projects2').addClass('gallery_animated gallery_animated--two');
  }, {
    offset: '40%'
  });

  $('.gallery').waypoint(function (direction) {
    $('.js--wp-projects3').addClass('gallery_animated gallery_animated--three');
  }, {
    offset: '40%'
  });

  $('.gallery').waypoint(function (direction) {
    $('.js--wp-projects4').addClass('gallery_animated gallery_animated--four');
  }, {
    offset: '40%'
  });

  $('.gallery').waypoint(function (direction) {
    $('.js--wp-projects5').addClass('gallery_animated gallery_animated--three');
  }, {
    offset: '40%'
  });

  $('.gallery').waypoint(function (direction) {
    $('.js--wp-projects6').addClass('gallery_animated gallery_animated--four');
  }, {
    offset: '40%'
  });

  $('.gallery').waypoint(function (direction) {
    $('.js--wp-projects7').addClass('gallery_animated gallery_animated--two');
  }, {
    offset: '40%'
  });

  $('.gallery').waypoint(function (direction) {
    $('.js--wp-projects8').addClass('gallery_animated gallery_animated--three');
  }, {
    offset: '40%'
  });

  $('.gallery').waypoint(function (direction) {
    $('.js--wp-projects9').addClass('gallery_animated gallery_animated--five');
  }, {
    offset: '40%'
  });

  // ANIMATED COUNTER
  $('.clients').waypoint(function (direction) {
    console.log('Im at counter')
    $('.counter').each(function () {
      $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
      }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
          $(this).text(Math.ceil(now));
        }
      });
    });
  })


  // FOOTER ANIMATIONS

  $('.footer__cta').waypoint(function (direction) {
    $('.js--wp-footer-post1').addClass('footer_animated');
  }, {
    offset: '40%'
  });

  $('.footer__cta').waypoint(function (direction) {
    $('.js--wp-footer-post2').addClass('footer_animated footer_animated--two');
  }, {
    offset: '40%'
  });

  $('.footer__cta').waypoint(function (direction) {
    $('.js--wp-footer-post3').addClass('footer_animated footer_animated--three');
  }, {
    offset: '40%'
  });

  $('.footer__cta').waypoint(function (direction) {
    $('.js--wp-footer-pic1').addClass('footer_animated');
  }, {
    offset: '40%'
  });

  $('.footer__cta').waypoint(function (direction) {
    $('.js--wp-footer-pic2').addClass('footer_animated gallery_animated--two');
  }, {
    offset: '40%'
  });

  $('.footer__cta').waypoint(function (direction) {
    $('.js--wp-footer-pic3').addClass('footer_animated footer_animated--three');
  }, {
    offset: '40%'
  });

  $('.footer__cta').waypoint(function (direction) {
    $('.js--wp-footer-pic4').addClass('footer_animated footer_animated--four');
  }, {
    offset: '40%'
  });

  $('.footer__cta').waypoint(function (direction) {
    $('.js--wp-footer-pic5').addClass('footer_animated gallery_animated--five');
  }, {
    offset: '40%'
  });

  $('.footer__cta').waypoint(function (direction) {
    $('.js--wp-footer-pic6').addClass('footer_animated footer_animated--six');
  }, {
    offset: '40%'
  });


  // GOOGLE MAP

  var map = new GMaps({
    div: '.footer__map',
    lat: 34.1444789,
    lng: -118.2578922,
    zoom: 12
  });

  map.addMarker({
    lat: 34.1444789,
    lng: -118.2578922,
    title: 'Americana Way, Glendale CA',
    infoWindow: {
      content: '<p>Bolina HQ</p>'
    }
  });
});