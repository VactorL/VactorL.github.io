$(() => {

    $('.barL-nav>li>a').click(function () {
        
        $(this).siblings('ul').stop().slideToggle();

    })

})