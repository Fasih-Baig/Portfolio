$(document).ready(function(){
  $(".navbar-brand").addClass("animated zoomIn");
  $(".underscore").addClass("animated flash");
  $(".btn-primary").addClass("animated bounce");

  $("[rel='tooltip']").tooltip();    
 
    $('.thumb').hover(
        function(){
            $(this).find('.caption').slideDown(250); //.slideDown(250)
        },
        function(){
            $(this).find('.caption').slideUp(250); //.slideUp(250)
        }
    ); 
});


