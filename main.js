$(document).ready(function() {
  var menu = "close";
  var x = window.matchMedia("(max-width: 800px)");
  $(".menu-button").click(function() {
    if (menu === "close") {
        $(this).next(".nav").addClass("animate");
        $(this).next(".nav").removeClass("hide");
        $(this).children(".line:first").removeClass("reset");
        $(this).children(".line:last").removeClass("reset");
        $(this).children(".line:first").addClass("animate-top");
        $(this).children(".line:last").addClass("animate-bottom");
        menu = "open";
    } else {
        $(this).next(".nav").removeClass("animate");
        $(this).children(".line:first").removeClass("animate-top");
        $(this).children(".line:last").removeClass("animate-bottom");
        menu = "close";
    }
  });
  function navType(x) {
    if (x.matches) {
      document.getElementById('nav').classList.remove("animate");
      menu = "close";
    } else {
      document.getElementById('nav').classList.add("hide");
      document.getElementsByClassName('line')[0].classList.add("reset");
      document.getElementsByClassName('line')[1].classList.add("reset");
      menu = "close";
    };
  }
  navType(x)
  x.addListener(navType)

  particlesJS('particles-js',
  {
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 1000
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.8,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0,
          "sync": false
        }
      },
      "size": {
        "value": 2,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 4,
          "size_min": 0.3,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 0.8,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 600
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "bubble"
        },
        "onclick": {
          "enable": false,
          "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 250,
          "size": 0,
          "duration": 2,
          "opacity": 0,
          "speed": 3
        },
        "repulse": {
          "distance": 400,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }

    );
});
