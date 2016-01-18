// This module wraps all iframes site-wide to give them responsive widths and maintain a proper aspect ratio to scale the height proportional to their width.
// It assumes all iframes used in the site to be video embeds. If this causes issues with non-video iframes then simply add conditional checking for data-type="video" on the iframe element before it wraps them. This feature was not added as it is assumed for now that all existing iframes are either Youtube or Vimeo videos.
// contact jon@flatironschool for details.

var ResponsiveIframeModule = (function(){

  //find all iframes and wrap them
  var wrapFrames = function() {

    $('video').wrap('<div class="videoWrapper">');

    //add styles
    $('.videoWrapper').css({
      'position': 'relative',
      'padding-bottom': '56.25%', //16:9 aspect ratio
      'padding-top': '25px',
      'height': '0'
    });
  };

  var initialize = function() {
    wrapFrames();
  };

  return {
    init: initialize
  };
}());

$(function(){
  //initialize module
  ResponsiveIframeModule.init();
});