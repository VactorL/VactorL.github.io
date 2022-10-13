$(() => {

    // $(document).ready(() => {

    //     $(".bar").load("./template/barL-nav/barL-nav.html");

    // });

    $('.barL-nav>li>a').click(function () {

        // 打开 or 关闭 选中菜单栏
        $(this).siblings('ul').stop().slideToggle();

        // 当选中菜单打开时，其他关闭
        $(this).parents().siblings().children('ul').slideUp();

    });

})