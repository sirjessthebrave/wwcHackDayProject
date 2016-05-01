var animated = false;

$(window).scroll(function(){
  var middleOffset = $(".icons").offset().top;
  var windowScroll = $(window).scrollTop();
  if(!animated) {
    if(middleOffset - windowScroll <= 70){
      $("#star1").animate({
        'marginTop': "-=5px"
      });
      $("#star2").delay(100).animate({
        'marginTop': "-=5px"
      });
      $("#star3").delay(200).animate({
        'marginTop': "-=5px"
      });
      $("#star4").delay(300).animate({
        'marginTop': "-=5px"
      });
      $("#star1").animate({
        'marginTop': "+=5px"
      });
      $("#star2").delay(100).animate({
        'marginTop': "+=5px"
      });
      $("#star3").delay(200).animate({
        'marginTop': "+=5px"
      });
      $("#star4").delay(300).animate({
        'marginTop': "+=5px"
      });
      animated = true;
    }
  };
});