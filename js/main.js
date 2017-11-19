/*=============================================>>>>>
= Document Ready =
===============================================>>>>>*/
$(document).ready(function() {

  'use strict';

  /*----------- Preloader -----------*/
  jQuery(window).load(function() {
    jQuery('.pulse').fadeOut();
    jQuery('.preloader').delay(1000).fadeOut('slow');
  });

  /*----------- One Page Nav -----------*/
  $('.eventster-nav').onePageNav({
    currentClass: 'current',
    easing: 'easeInOutCubic',
    scrollThreshold: 0.2,
    filter: ':not(.external)',
    changeHash: false
  });


  /*----------- Navigation Visible on scroll -----------*/

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 250) {
      $('.sticky-navigation').animate({
        "top": '0',
        "opacity": '1'
      }, 0);
    } else {
      $('.sticky-navigation').animate({
        "top": '-64',
        "opacity": '0'
      }, 0);
    }
    return false;
  });


  /*----------- Hero Countdown -----------*/
  var $countdown = $('.event-countdown');
  $countdown.jCounter({
    date: '16 February 2018 19:30:00', //format: DD month YYYY HH:MM:SS
    serverDateSource: 'php/dateandtime.php',
    timezone: 'Asia/Kolkata', // Define your timezone.
    format: 'dd:hh:mm:ss',
    twoDigits: 'on',
    callback: function() {
      console.log("Countdown finished!"); // Define the function which will run after the countdown has finished.
    }
  });
  /*----------- Video Lighbox -----------*/
  $('.button-video').magnificPopup({
    type: 'iframe',
    disableOn: 320
  });
  /*----------- Testimonial Slider  -----------*/
  var $testimonial = $('.testimonial-carousel');
  $testimonial.owlCarousel({
    autoplay: true,
    items: 4,
    itemsDesktop: [1170, 4],
    itemsDesktopSmall: [991, 3],
    itemsTablet: [694, 2],
    itemsMobile: [480, 1]
  });
  /*----------- Sheduele Easy Tabs -----------*/
  $('.timeline-container').easytabs({
    animationSpeed: 500,
    updateHash: false,
  });
  /*----------- Back To Top Scroll -----------*/
  var scrollTopDuration = 1500,
    $back_to_top = $('a.back-to-top');
  $back_to_top.on('click', function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: 0,
    }, scrollTopDuration);
  });
});
/*= End of Document Ready =*/
/*=============================================<<<<<*/

/*=============================================>>>>>
= Mailchimp Subscription =
===============================================>>>>>*/
$('#subscribe-header').ajaxChimp({
  callback: mailchimpCallback,

  /* Place your URL here */
  url: 'http://paperboatdesigns.us12.list-manage.com/subscribe/post?u=d83b46829c894345bed5137e4&amp;id=ce2c39616e',

});

function mailchimpCallback(resp) {
  if (resp.result === 'success') {
    $('.subscription-success')
      .html('<span class="lnr lnr-cross-circle"></span> ' + resp.msg)
      .fadeIn(1000);

    $('.subscription-failure').fadeOut(500);

  } else if (resp.result === 'error') {
    $('.subscription-failure')
      .html('<span class="lnr lnr-checkmark-circle"></span> ' + resp.msg)
      .fadeIn(1000);

    $('.subscription-success').fadeOut(500);
  }
}

/*= End of Mailchimp Subscription =*/
/*=============================================<<<<<*/

/*=============================================>>>>>
= Contact Form email =
===============================================>>>>>*/
$("#contact-form").submit(function(e) {
  e.preventDefault();
  var name = $("#name").val();
  var email = $("#email").val();
  var message = $("#message").val();
  var dataString = 'name=' + name + '&email=' + email + '&message=' + message;

  function isValidEmail(emailAddress) {
    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    return pattern.test(emailAddress);
  }

  if (isValidEmail(email) && (message.length > 1) && (name.length > 1)) {
    $.ajax({
      type: "POST",
      url: "php/contact.php",
      data: dataString,
      success: function() {
        $('.email-success').fadeIn(1000);
        $('.email-failed').fadeOut(500);
      }
    });
  } else {
    $('.email-failed').fadeIn(1000);
    $('.email-success').fadeOut(500);
  }

  return false;
});


/*= End of Contact Form email =*/
/*=============================================<<<<<*/

/*=============================================>>>>>
= Registration Form email =
===============================================>>>>>*/
$("#registration").submit(function(e) {
  e.preventDefault();
  var name = $("#register-name").val();
  var email = $("#register-email").val();
  var plan = $("#register-plan").val();
  var dataString = 'name=' + name + '&email=' + email + '&plan=' + plan;

  function isValidEmail(emailAddress) {
    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    return pattern.test(emailAddress);
  }

  if (isValidEmail(email) && (plan.length > 1) && (name.length > 1)) {
    $.ajax({
      type: "POST",
      url: "php/register.php",
      data: dataString,
      success: function() {
        $('.register-success').fadeIn(1000);
        $('.register-failed').fadeOut(500);
      }
    });
  } else {
    $('.register-failed').fadeIn(1000);
    $('.register-success').fadeOut(500);
  }

  return false;
});


/*= End of Registration Form email =*/
/*=============================================<<<<<*/

/*=============================================>>>>>
= Google Maps =
===============================================>>>>>*/
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
  // Basic options for a simple Google Map
  // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
  var mapOptions = {
    // How zoomed in you want the map to start at (always required)
    zoom: 12,
    scrollwheel: false,


    // The latitude and longitude to center the map (always required)
    center: new google.maps.LatLng(12.938383, 77.617729), // Bengaluru

    // How you would like to style the map.
    // This is where you would paste any style found on Snazzy Maps.
    styles: [{
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [{
        "color": "#e9e9e9"
      }, {
        "lightness": 17
      }]
    }, {
      "featureType": "landscape",
      "elementType": "geometry",
      "stylers": [{
        "color": "#F6F6F8"
      }, {
        "lightness": 20
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "geometry.fill",
      "stylers": [{
        "color": "#ffffff"
      }, {
        "lightness": 17
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [{
        "color": "#ffffff"
      }, {
        "lightness": 29
      }, {
        "weight": 0.2
      }]
    }, {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [{
        "color": "#ffffff"
      }, {
        "lightness": 18
      }]
    }, {
      "featureType": "road.local",
      "elementType": "geometry",
      "stylers": [{
        "color": "#ffffff"
      }, {
        "lightness": 16
      }]
    }, {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [{
        "color": "#F6F6F8"
      }, {
        "lightness": 21
      }]
    }, {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [{
        "color": "#dedede"
      }, {
        "lightness": 21
      }]
    }, {
      "elementType": "labels.text.stroke",
      "stylers": [{
        "visibility": "on"
      }, {
        "color": "#ffffff"
      }, {
        "lightness": 16
      }]
    }, {
      "elementType": "labels.text.fill",
      "stylers": [{
        "saturation": 36
      }, {
        "color": "#6b7684"
      }, {
        "lightness": 40
      }]
    }, {
      "elementType": "labels.icon",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [{
        "color": "#f2f2f2"
      }, {
        "lightness": 19
      }]
    }, {
      "featureType": "administrative",
      "elementType": "geometry.fill",
      "stylers": [{
        "color": "#fefefe"
      }, {
        "lightness": 20
      }]
    }, {
      "featureType": "administrative",
      "elementType": "geometry.stroke",
      "stylers": [{
        "color": "#fefefe"
      }, {
        "lightness": 17
      }, {
        "weight": 1.2
      }]
    }]
  };

  // Get the HTML DOM element that will contain your map
  // We are using a div with id="map" seen below in the <body>
  var mapElement = document.getElementById('map');

  // Create the Google Map using our element and options defined above
  var map = new google.maps.Map(mapElement, mapOptions);

  // Let's also add a marker while we're at it
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(12.938383, 77.617729),
    map: map,
    title: 'Eventster',
    icon: 'img/map-marker.png'
  });
}
/*= End of File =*/
/*=============================================<<<<<*/
