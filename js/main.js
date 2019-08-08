const but = $('#buttonContacts');
const modal = $('.contacts');
const close = $('.contacts__close');
but.click(function(){
    modal.addClass('contacts_open');
});
close.click(function(){
    modal.removeClass('contacts_open');
});
$(document).mouseup(function (e){
    var div = $(modal);
    if (!div.is(e.target)
        && div.has(e.target).length === 0) {
        div.removeClass('contacts_open');
    }
});