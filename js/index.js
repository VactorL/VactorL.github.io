$(() => {

    $('.barL-nav>li>a').click(function () {

        // 打开 or 关闭 选中菜单栏
        $(this).siblings('ul').stop().slideToggle();

        // 当选中菜单打开时，其他关闭
        $(this).parents().siblings().children('ul').slideUp();

    });

    $('.barL-subT>li>a').click(function () {

        var url = $(this).attr("class");
        var text = $(this).text();
        
        $('.content').attr('src' , url);
        $('.content-title').text(text);

    });


});

/* window.onload = function () {

    frameHeight();
    
}

function frameHeight(id) {
    
    let ifm = document.getElementById(id);
    ifm.height = document.documentElement.scrollHeight;

} */