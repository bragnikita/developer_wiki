$('a.preview_link').on('click', (e) => {
  if (e.which == 2) {
    return true;
  }
  e.preventDefault();
  const link = e.target;
  const target = link.href;
  console.log(target);
  $("#previewModal")
  .find('iframe').attr('src', target)
  .andSelf()
  .find('#previewModalLabel').html($(link).html());
  $("#previewModal").modal('show');
})
