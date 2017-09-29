lightGallery(document.getElementById('lightgallery'), {
  selector: '.gallery-item',
});

var items = $('.single-portfolio');

$.each(items, function(key, value) {
  console.warn(
    $(value)
      .find('a')
      .after()
  );
  // $(value)
  //   .find('a:after')
  //   .css('content', $(value).data('title'));
});
