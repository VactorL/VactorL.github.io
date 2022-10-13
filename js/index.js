$(() => {

    // $(document).ready(() => {

    //     $(".bar").load("./template/barL-nav/barL-nav.html");

    // });

    $('.barL-nav>li>a').click(function () {
        
        $(this).siblings('ul').stop().slideToggle();

    });

})