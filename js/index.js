$(function() {
  var $container = $('.packery').packery();

  $container.on('click', '.item', function(event) {
    // remove class gigante from previous element
    $(".item").each(function() {
      if ($(this).hasClass('is-expanded')) {
        $(this).removeClass('is-expanded');
      }
    });
    var $item = $(event.currentTarget);
    var isExpanded = $item.hasClass('is-expanded');
    $item.toggleClass('is-expanded');
    if (isExpanded) {
      // if shrinking, just layout
      $container.packery();
    } else {
      // if expanding, fit it
      $container.packery('fit', event.currentTarget);
    }
    $container.packery();
  });
});

$('.item').hover(function() {
  $(this).children(".caption").children(".zmdi").toggleClass("animated wobble");
})