$(function(){
  var $navLinks = $('nav a'),
      $section = $('section');
  $navLinks.first().addClass('active');

  smoothScroll.init({
    callbackBefore: function ( toggle, anchor ) {
      $navLinks.removeClass('active');
      $(toggle).addClass('active');
    }
  });

  // $section.each(function () {
    
  // });

  // var sections = $('section')
  // , nav = $('nav')
  // , nav_height = nav.outerHeight();
 
  // $(window).on('scroll', function () {
  //   var cur_pos = $(this).scrollTop();
   
  //   sections.each(function() {
  //     var top = $(this).offset().top - nav_height,
  //         bottom = top + $(this).outerHeight();
   
  //     if (cur_pos >= top && cur_pos <= bottom) {
  //       nav.find('a').removeClass('active');
  //       sections.removeClass('active');
   
  //       //$(this).addClass('active');
  //       var id = $(this).attr('id');
  //       console.log(id);
  //       //nav.find('a[href="#'+id+'"]').addClass('active');
  //     }
  //   });
  // });

  // nav.find('a').on('click', function () {
  //   var $el = $(this)
  //     , id = $el.attr('href');
   
  //   $('html, body').animate({
  //     scrollTop: $(id).offset().top - nav_height
  //   }, 500);
   
  //   return false;
  // });

});