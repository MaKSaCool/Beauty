// OFF hover
if ( ('ontouchstart' in window) || window.DocumentTouch) {
    console.log('this is a touch device');
  } else {
    console.log('this is not a touch device');
    document.body.classList.add('no-touch');
}

// BURGER 
$(document).ready(function () {
    $('.header__burger').click(function (event) { 
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

