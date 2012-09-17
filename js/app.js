(function(window, document, $, undefined) {
$(function () {

  var cache;

  // Cache useful elements
  cache = {};
  cache.$body = $('body');
  cache.$header = $('header');
  cache.$nav_button = $('nav a.nav', cache.$header);

  // Nav button clicked
  cache.$nav_button.click(function(ev) {
    ev.preventDefault();
    cache.$body.toggleClass('closed');
  });

});
}(this, document, jQuery));
