function getStyle(obj , name){

    if(window.getComputedStyle){
        //正常浏览器
        return getComputedStyle(obj,null)[name];
    }else{
        //IE8
        return obj.currentStyle[name];
    }

}

/*
* 尝试创建执行动画函数
*
*   参数：
*       Fir.执行动画的对象
*       Sec.要执行动画的样式，比如：left, top, width, height...
*       Thi.执行动画的目标位置
*       Fou.移动速度(正数右移，负数左移)
*       Fif.回调函数，这个函数将会在动画执行完毕后执行
* */

function move(obj , attr , target , speed , callback){

    clearInterval(obj.timer);

    var current = parseInt(getStyle(obj,attr));

    if(current > target){
        speed = -speed;
    }

    //开启定时器，用于执行动画效果
    //向执行动画的对象中添加一个timer属性，用来保存它自己的定时器标识
    obj.timer = setInterval(function () {

        //获取box1原来的left值
        var oldV = parseInt(getStyle(obj,attr));

        //设置移动速度
        var newV = oldV + speed;

        if(speed < 0 && newV < target || speed > 0 && newV > target){
            newV = target;
        }

        //将新值赋给box1
        obj.style[attr] = newV + 'px';

        //当动画执行元素移动到target时，关闭定时器
        if(newV == target){
            //达到目标，关闭定时器
            clearInterval(obj.timer);
            //动画执行完毕，调用回调函数
            callback && callback();

        }

    },30);

}

/*
        * 用来向元素中添加指定的class属性值
        *   参数：
        *       Fir.目标对象
        *       Sec.class值
        * */
function addClass (obj , cn) {

    if(!hasClass(obj , cn)){
        obj.className += " " + cn;
    }
}

/*
* 判断元素中是否含有指定的class属性值
*   参数：
*       Fir.目标对象
*       Sec.class值
* */
function hasClass (obj , cn) {

    //判断obj中有没有cn class
    //创建正则表达式，字面量，写死了，我们需要动态的表达式
    //var reg = /\bb2\b/;

    //创建构造函数，动态正则表达式
    var reg = new RegExp("\\b" + cn + "\\b");

    return reg.test(obj.className);

}

function removeClass (obj , cn) {

    var reg = new RegExp("\\b" + cn + "\\b");

    if(reg){

        obj.className = obj.className.replace(reg , "");

    }

}

/*
* toggleClass用来切换类
*   若元素中具有该类，则删除
*   若元素中没有该类，则添加
* */
function toggleClass (obj , cn) {

    if(hasClass(obj , cn)){

        removeClass(obj , cn);

    }else{

        addClass(obj , cn);

    }

}