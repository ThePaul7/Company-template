$(document).ready(function () {

    $("#owl-product").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        navigation: false,
        items: 4,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
        navigationText: ["předchozí", "další"]

    });

});