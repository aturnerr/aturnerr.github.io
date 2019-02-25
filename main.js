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
});
