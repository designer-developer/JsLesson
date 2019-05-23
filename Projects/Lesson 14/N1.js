$(document).ready(function () {
    $('.modal').css('top', '-500px');
   
    $('[href="#tour"], [href="#sheldure"], .main_btn').on('click', function () {
     $('.modal').animate({
      display: "block",
      top: "0px"
     }, 2000).show();
     $('.overlay').fadeToggle(2000);
    });
   
    $('.close').on('click', function () {
     $('.modal').animate({
      display: "none",
      top: "-500px"
     }, 500).hide(1000);
     $('.overlay').fadeToggle(1000);
    });
});