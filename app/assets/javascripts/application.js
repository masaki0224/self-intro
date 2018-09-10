//= require rails-ujs
//= require turbolinks
//= require_tree .
//= require jquery

$(document).on('turbolinks:load', function() {
  $('a[href^="#"]').click(function() {
     var speed = 500;
     var href = $(this).attr("href");
     var target = $(href == "#" || href == "" ? 'html' : href);
     console.log(href);
     var position = target.offset().top;
     $('body,html').animate({
       scrollTop: position
     }, speed, 'swing');
     return false;
   });
});
