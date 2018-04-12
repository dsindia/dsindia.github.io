$(document).ready(function() {
       /* Scroll animation on click.
       Code credit to Beep and jmoerdyk on StackOverflow
       https://stackoverflow.com/questions/16475198/jquery-scrolltop-animation */
    $('a[href^="#"]').on('click', function(event) {
    var target = $( $(this).attr('href') );
    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 500);
    }

    });
});
