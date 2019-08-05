$('input').on('input', function(){
  if ($(this).val() !== '') {
    $(this).addClass('focus')
  } else {
    $(this).removeClass('focus')
  }
})