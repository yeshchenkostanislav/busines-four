if ($('.thanks_active')) {
  /*   $('html, body').css({
      overflow: 'hidden',
      height: '100%'
    }); */
} else {
  /*  $('html, body').css({
     overflow: 'auto',
     height: 'auto'
   }); */
}

$('.thanks__popup-close').click(function () {
  $('.thanks').removeClass('thanks_active')
})

$(document).mouseup(function (e) { // событие клика по веб-документу
  var div = $(".thanks__window"); // тут указываем ID элемента
  if (!div.is(e.target) // если клик был не по нашему блоку
    &&
    div.has(e.target).length === 0) { // и не по его дочерним элементам
    $('.thanks').removeClass('thanks_active')
  }
});