$(".navbar-collapse ul li a[href^='#']").on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;
   var w = $(window).width();
   var top = 50;

   if (w <= 767) {
       top = 120;
   }

   // animate
   $('html, body').animate({
       scrollTop: $(hash).offset().top -top
     }, 300, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

});

$("a.navbar-brand[href^='#']").on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash; 

   // animate
   $('html, body').animate({
       scrollTop: $(hash).offset().top -50
     }, 300, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

});

$("#back-to-top a[href^='#']").on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash; 

   // animate
   $('html, body').animate({
       scrollTop: $(hash).offset().top -50
     }, 300, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

});
