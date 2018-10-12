$(document).ready(function () {

    //script for navigation
    
    $('.menu-link').menuFullpage({
        menu: "#menu",
        push: ".push",
        side: "left",
        menuWidth: "100%",
        speed: "600",
        activeBtn: "menu-open"
    });

    //contact budget

    $(document).on('input change', '#budget', function() {
        $('.budget-text').html( $(this).val() );
    });
    

});