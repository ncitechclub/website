// navbar.js
$(function () {
    function updateNavbar() {
        // Update navbar color based on window width
        $('.navbar').toggleClass('navbar-dark', $(window).width() <= 990);

        // Add or remove 'active' class based on scroll position
        $('.navbar').toggleClass('active', $(window).scrollTop() > 10);
    }

    // Execute on load and bind event listeners
    $(window).on({
        load: updateNavbar,
        resize: updateNavbar,
        scroll: updateNavbar
    });
});
