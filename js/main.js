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
= Google Maps =
===============================================>>>>>*/
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
  // Basic options for a simple Google Map
  // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
  var mapOptions = {
    // How zoomed in you want the map to start at (always required)
    zoom: 15,
    scrollwheel: false,


    // The latitude and longitude to center the map (always required)
    center: new google.maps.LatLng(47.702818 , -122.325011), // Seattle

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
    position: new google.maps.LatLng(47.702818,-122.325011),
    map: map,
    title: 'Eventster',
    icon: 'img/map-marker.png'
  });
}
/*====================================================*/
/*= End of File =*/
/*=============================================<<<<<*/
