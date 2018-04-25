var scrolltime = 500;
var navHeight = 80;

$(document).ready(function() {

    // Scrolling
    $("#about-link").click(function() {
        $('html, body').animate({
            scrollTop: $("#about").offset().top - navHeight
        }, scrolltime);
        console.log('pls');
    });

    $("#projects-link").click(function() {
        $('html, body').animate({
            scrollTop: $("#projects").offset().top - navHeight
        }, scrolltime);
    });

    // animate in
    $(window).scroll(function(event) {

      $(".module").each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
          el.addClass("come-in");
      }
    });

  });

    var win = $(window);
    var allMods = $(".module");

    // Already visible modules
    allMods.each(function(i, el) {
      var el = $(el);
      if (el.visible(true)) {
        el.addClass("already-visible");
      }
    });

    win.scroll(function(event) {

      allMods.each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
          el.addClass("come-in");
        }
      });

  });
});