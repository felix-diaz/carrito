
$( document ).ready(function() {
   $('#carritocompras').on('click', function() {
        $('#carritocompras').fadeOut(1000);
   });
});

function haciaArriba(titulo) {
    $("html, body").animate({scrollTop: $("#" + titulo).offset().top}, 1000)
}