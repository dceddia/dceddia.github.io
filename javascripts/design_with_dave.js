$(function() {
  var title_element = $('#site-title a');
  var default_title = title_element.text();
  var title_with_underscores = default_title.replace(/ /g, '_');
  title_element.text(title_with_underscores);
});
