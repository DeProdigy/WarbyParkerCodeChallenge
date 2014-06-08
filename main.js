$( document ).ready(function() {

  var lastScroll = 0;

  function Resizer(htmlObj) {
    // set up constant variables
    var maxWidth= $(htmlObj).width();
    var minWidth = (maxWidth / 3);
    var widthChange = maxWidth - minWidth;

    // event listener on scrolls
    $( window ).scroll(function(event) {

      var currentScroll = $(this).scrollTop();

      // scroll range: total height of the page - the viewport
      var scrollRange = $(document).height() - $(window).height();

      // change in width to max number of scrolls
      var scrollRate = (widthChange / scrollRange);

      // current scroll location times the rate of scroll change
      var changeWidthDown = currentScroll * scrollRate;
      var changeWidthtUp = (scrollRange - currentScroll) * scrollRate;

      // if scroll number has increased, then the scroll was downward
      if (currentScroll > lastScroll){
        // downscroll
        $(htmlObj).width(maxWidth - changeWidthDown);
      } else {
        // upscroll
        $(htmlObj).width(minWidth + changeWidthtUp);
      }

      // set current currentScroll as last scroll to tack if the change was up or down
      lastScroll = currentScroll;
    });

  }

  // create a resizer for each html object
  var imageResizer = new Resizer('img');
  var lightboxResizer = new Resizer('.lightbox');

});