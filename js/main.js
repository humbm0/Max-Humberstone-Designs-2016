$(document).ready(function(){

  //hide nav on scroll
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $('header').outerHeight();

  $(window).scroll(function(event){
      didScroll = true;
  });

  setInterval(function() {
      if (didScroll && !header.hasClass('open')) {
          hasScrolled();
          didScroll = false;
      }
  }, 250);

  function hasScrolled() {
      var st = $(this).scrollTop();

      // Make sure they scroll more than delta
      if(Math.abs(lastScrollTop - st) <= delta)
          return;

      // If they scrolled down and are past the navbar, add class .nav-up.
      // This is necessary so you never see what is "behind" the navbar.
      if (st > lastScrollTop && st > navbarHeight){
          // Scroll Down
          $('header').removeClass('nav-down').addClass('nav-up');
      } else {
          // Scroll Up
          if(st + $(window).height() < $(document).height()) {
              $('header').removeClass('nav-up').addClass('nav-down');
          }
      }

      lastScrollTop = st;
  }


  //burger nav
  var header = $('header');

  function hideList() {
    $('header ul li').removeClass('show');
  }
  function showList() {
    $('header ul li').addClass('show');
  }
  function hideNav() {
    $('header').removeClass('open');
  }
  function showNav() {
    $('header').removeClass('open');
  }

  $('.burger').click(function(){
    if (header.hasClass('open')) {
      $('header ul li').removeClass('show');
      setTimeout(hideNav, 500);
    }else{
      $('header').addClass('open');
      setTimeout(showList, 500);
    };
  });

});
