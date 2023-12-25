//navbar.js
$(function () {
    function checkWidth() {
        if ($(window).width() <= 990) {
            $('.navbar').addClass('navbar-dark');
        } else {
            $('.navbar').removeClass('navbar-dark');
        }
    }

    // Execute on load
    checkWidth();

    // Bind event listener
    $(window).resize(checkWidth);

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 10) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});