$(function () {

    $(".notic-getout").click(function () {
        // $(".login-notic").slideUp(500);//slideUp向上滑动隐藏
        $(".login-notic").removeClass("notice");

    });

    // 购物车列表
    $(".car-detail").mouseenter(function () {
        $(".car-detail>a").css("color", "#ff6700");
        $(".car-detail").css("background-color", "#fff");
        $(".car-detail>div").stop().slideDown(100);
    });
    $(".car-detail").mouseleave(function () {
        $(".car-detail>a").css("color", "#b0b0b0");
        $(".car-detail").css("background-color", "#424242");
        $(".car-detail>div").stop().slideUp(100);
    });









    // 固定商品名称栏
    var top1 = $(".incontainer-header").offset().top;
    $(window).on("scroll", function () {
        $(".mask").css("display", "none");
        $(".big").css("display", "none");
        var win_top = $(this).scrollTop();
        var top = $(".incontainer-header").offset().top;

        if (win_top >= top) {
            $(".incontainer-header").addClass("sfixed");
        }//如果此处用else判断来remove sfixed这个类的话是不行的，因为当加上这个类的时候，".scroll"这个元素fixed的top值是0，获取到的offset.top就相当于是当前滚动条的滚动的距离，win_top与top值就一直相等了，这样会导致抖动；只有与以前的距离做比较才能实现滑上去的时候能回到原来的位置。

        if (win_top < top1) {
            $(".incontainer-header").removeClass("sfixed");
        }
    });

    //固定轮播图
    var win_top = 0;
    $(window).scroll(function () {
        win_top = $(document).scrollTop();
        if (win_top > 200 && win_top < 1000) {
            $(".container-main-left").css({
                "position": "fixed",
                "top": '92px'
            });
            $(".container-main-left").css("margin-top", "");
        } else {
            $(".container-main-left").css("position", "static");
        }
        if (win_top > 1000) {
            $(".container-main-left").css("margin-top", "1000px");
            $(".container-main-left").css("position", "static");
        }
    });





    //  轮播图
    var index = 0;
    var timer = setInterval(autoplay, 2000);
    function autoplay() {
        // clearInterval(timer);
        index++;
        $(".chart-img > img").eq(index).fadeIn(500).siblings().fadeOut(500);
        $(".chart-tip ul > li").eq(index).addClass("active").siblings().removeClass("active");
        $("#big > img").eq(index).addClass("bigImg").siblings().removeClass("bigImg");
        if (index == $(".chart-img > img").length - 1) {
            index = -1;
        }
    }
    $(".toLeft").click(function () {
        var index = $(".active").index();
        if (index == 0) {
            index = -1;
        } else {
            index--;
        }
        $(".chart-tip ul > li").eq(index).addClass("active").siblings().removeClass("active");
        $("#big > img").eq(index).addClass("bigImg").siblings().removeClass("bigImg");
    });
    $(".toRight").click(function () {
        if (index == $(".chart-img > img").length - 1) {
            index = 1;
        } else {
            index++;
        }
    });



    // 放大镜	**********************************************************************************************
    $(".Rotationchart").mouseover(function () {
        //鼠标移入，放大镜出现
        clearInterval(timer);
        $("#mask").css("display", "block");
        $("#big").css("display", "block");

    });
    $(".Rotationchart").mouseout(function () {
        // 鼠标移除，放大镜隐藏
        timer = setInterval(autoplay, 2000);
        $("#mask").css("display", "none");
        $("#big").css("display", "none");

    });

    // 在box上鼠标移动遮罩层跟随移动
    $(".Rotationchart").mousemove(function (e) {
        var l = e.pageX - $(".Rotationchart").offset().left - $("#mask").width() / 2;
        var t = e.pageY - $(".Rotationchart").offset().top - $("#mask").height() / 2;

        if (l < 0) {
            l = 0;
        } else if (l > ($(".Rotationchart").width() - $("#mask").width())) {
            l = $(".Rotationchart").width() - $("#mask").width() - 100 + "px";
        }

        if (t < 0) {
            t = 0
        } else if (t > ($(".Rotationchart").height() - $("#mask").height())) {
            t = $(".Rotationchart").height() - $("#mask").height() - 100 + "px";
        }

        $("#mask").css({
            left: l + "px",
            top: t + "px"
        });
        var disX = l / ($(".Rotationchart").width() - $("#mask").width());
        var disY = t / ($(".Rotationchart").height() - $("#mask").height());

        //右侧放大镜显示的逻辑
        $(".bigImg").css({
            left: -disX * ($(".bigImg").width() - $("#big").width()) + "px",
            top: -disY * ($(".bigImg").height() - $("#big").height()) + "px"
        })

    });



    var moremoney = 2999;
    //选择手机版本********************************************************************************
    $(".price").click(function () {
        $(this).addClass("re-pro").siblings().removeClass("re-pro");
        $(this).children().eq(0).addClass("notice-color");
        $(this).siblings().children(".pro-ram").removeClass("notice-color");
        $(this).children().eq(1).addClass("pro-p");
        $(this).siblings().children(".pro-price").removeClass("pro-p");

        $(".name").html(" ");
        var ram = $(this).children(".pro-ram").html();
        $(".name").append(ram);
        var money = $(this).children(".pro-price").html();
        $(".money-more").html(" ");
        $(".money-more").append(money);

        $(".allmoney").children().eq(0).html(" ");

        moremoney = $(this).children(".pro-price").children().eq(0).html();
        var mun = (moremoney - 0) + (nex - 0) + (box - 0);
        $(".allmoney").children().eq(0).append(mun);

    });


    // 选择颜色
    $(".color-pro").click(function () {
        $(this).addClass("re-pro").siblings().removeClass("re-pro");
        $(this).addClass("notice-color").siblings().removeClass("notice-color");

        $(".col-th").html(" ");
        var color = $(this).children().eq(1).html();
        $(".col-th").append(color);

    });

    var nex = 0;
    // 选择服务
    $(".promise").click(function () {
        $(this).css("border-color", "#ff6700").siblings().css("border-color", "#ccc");
        $(this).children().eq(1).addClass("notice-color");
        $(this).siblings().children(".mi-pro").removeClass("notice-color");

        // $(this).children().eq(0).children().eq(0).children().addClass("notice-color");
        // $(this).children().eq(3).children().eq(0).children().addClass("notice-color");
        $(this).find("input").prop('checked', true);
        $(".believe").find("input").prop('checked', false);

        $(".yiwai").html(" ");
        var yiwai = $(this).children().eq(1).html();
        $(".yiwai").append(yiwai);

        $(".moner-pro").html(" ");
        var monerpro = $(this).children().eq(3).children().eq(4).html();
        $(".moner-pro").append(monerpro);

        if ($(this).find("input").prop('checked', true)) {
            nex = $(this).children().eq(3).children().eq(4).children().eq(0).html();
            // var allmoney = $(".allmoney").children(0).html();
            var sam = (nex - 0) + (moremoney - 0) + (box - 0);
            $(".allmoney").children(0).html(sam);

        }


    });
    //选择保障
    $(".believe").click(function () {
        $(this).css("border-color", "#ff6700").siblings().css("border-color", "#ccc");
        $(this).children().eq(1).addClass("notice-color");
        $(this).siblings().children(".mi-pro").removeClass("notice-color");
        $(this).find("input").prop('checked', true);
        $(".promise").find("input").prop('checked', false);
        $(".yiwai").html(" ");
        var yiwai = $(this).children().eq(1).html();
        $(".yiwai").append(yiwai);

        $(".moner-pro").html(" ");
        var monerpro = $(this).children().eq(3).children().eq(4).html();
        $(".moner-pro").append(monerpro);

        if ($(this).find("input").prop('checked', true)) {
            nex = $(this).children().eq(3).children().eq(4).children().eq(0).html();
            // var allmoney = $(".allmoney").children(0).html();
            var sam = (nex - 0) + (moremoney - 0) + (box - 0);
            $(".allmoney").children(0).html(sam);

        }

    });
    //延长保修
    var box = 0
    $(".chengnuo").click(function () {
        $(this).css("border-color", "#ff6700");
        $(this).children().eq(1).addClass("notice-color");
        $(this).children().eq(0).children().eq(0).children().addClass("notice-color");
        $(this).children().eq(3).children().eq(0).children().addClass("notice-color");
        $(this).find("input").prop('checked', true);

        $(".baozhang").html(" ");
        var baozhang = $(this).children().eq(1).html();
        $(".baozhang").append(baozhang);

        $(".server").html(" ");
        var server = $(this).children().eq(3).children().eq(4).html();
        $(".server").append(server);

        if ($(this).find("input").prop('checked', true)) {
            box = $(this).children().eq(3).children().eq(4).children().eq(0).html();
            var sum = (box - 0) + (nex - 0) + (moremoney - 0);

            $(".allmoney").children(0).html(sum);

        }

    });



    // 重置购物车列表；点击发生时购物车列表数量，件数，总价增加
    // $(".getnum").html(0);
    // $(".allnum").html(0);
    // $(".allrmb").html(0);
    var getnumber = 0;
    // 加入商品到购物车逻辑
    $(".shopcar").click(function () {

        //点击发生时提醒消失//  价格合计显示
        $(".load").css("display", "none");
        $(".all-price").css("display", "block");

        //判断手机，保险，服务是否选中，若选中 则点击发生时添加到购物车；
        if ($(".shop-pro li:first")) {
            var idNum = $(".shop-pro").children().eq(0).children().eq(0).html();
            var img = $(".pic").attr("src");
            var bgname = $(".shop-pro").children().eq(0).children().eq(2).html();
            var ram = $(".name").html();
            var price = $(".money-more").children().eq(0).html();
            var num = 1;
            // console.log(1, idNum, img, ram, bgname, price);
            var str = ``;
            str += ` 
                    <li class="load">
                        <span style="display:none">21</span>
                        <img src=${img} alt="" class="fl">
                        <p class="fl mi-num">${bgname}</p>
                        <span class="fr"><span class="toprice">${price}</span> *
                            <i class="tonum">${num}</i>
                        </span>
                        <em class="iconfont del fr" id="shan">&#xe603;</em>
                    </li> `;

            $(".loading").prepend(str);
            getnumber += 1;
        }
        //   保险选中 
        if (!$(".shop-pro").children().eq(1).children().eq(3).html() == " ") {
            var idNum = $(".shop-pro").children().eq(1).children().eq(0).html();
            var img = $(".pag").attr("src");
            var bgname = $(".yiwai").html();
            var ram = " ";
            var price = $(".moner-pro").children().eq(0).html();
            var num = 1;
            // console.log(2, idNum, img, ram, bgname, price);
            var str = ``;
            str += ` 
                    <li class="load">
                        <span style="display:none">21</span>
                        <img src=${img} alt="" class="fl">
                        <p class="fl mi-num">${bgname}</p>
                        <span class="fr"><span  class="toprice">${price}</span> *
                            <i class="tonum">${num}</i>
                        </span>
                        <em class="iconfont del fr" id="shan">&#xe603;</em>
                    </li> `;
            $(".loading").append(str);
            getnumber += 1;

        }

        // 服务选中
        if (!$(".shop-pro li:last").children().eq(3).html() == " ") {
            var idNum = $(".shop-pro").children().eq(2).children().eq(0).html();
            var img = $(".pag").attr("src");
            var bgname = $(".baozhang").html();
            var ram = " ";
            var price = $(".server").children().eq(0).html();
            var num = 1;
            console.log(3, idNum, img, ram, bgname, price);
            var str = ``;
            str += ` 
                    <li class="load">
                        <span style="display:none">21</span>
                        <img src=${img} alt="" class="fl">
                        <p class="fl mi-num">${bgname}</p>
                        <span class="fr"><span  class="toprice">${price}</span> *
                            <i class="tonum">${num}</i>
                        </span>
                        <em class="iconfont del fr" id="shan">&#xe603;</em>
                    </li> `;
            $(".loading").append(str);
            getnumber += 1;
        }
        $(".getnum").html(getnumber);
        $(".allnum").html(getnumber);

        var thisMoney = $(".allmoney").children().eq(0).html();

        $(".allrmb").html(thisMoney);
    })

    // 购物车列表的增删改
    $(".loading").on("click", "em", function () {
        // console.log($(this).parent().index());
        if ($(this).parent().index() == 0) {
            $(".loading>li:not(:first)").remove();
            $(".all-price").css("display", "none");

            $(".load").html(`<p class="no-pre">购物车中还没有商品 赶紧选购吧</p>`)
            $(".getnum").html(0);
            $(".allnum").html(0);
            $(".allrmb").html(0);
        } else {
            $(this).parent().remove();
            var numth = $(this).length;
            var numone = $(".getnum").html();
            numbertre = (numone - 0) - (numth - 0);
            $(".getnum").html(numbertre);
            $(".allnum").html(numbertre);

            var numfri = $(".allrmb").html();
            var moneyNow = $(this).siblings().children().eq(0).html();
            var numberfor = (numfri - 0) - (moneyNow - 0);
            console.log(numfri, moneyNow, numberfor);
            $(".allrmb").html(numberfor);
            $(".allmoney").children(0).html(numberfor);

        }
    });
    var s = decodeURI(location.search);
    var seachStr = s.split('?')[1];
    var userInfo = seachStr.split('&');
    var img = userInfo[0].split("=")[1];
    var name = userInfo[1].split("=")[1];
    var price = userInfo[2].split("=")[1];
    $(".haha").attr("src",img);
    $(".hehe").html(price);
    $(".xixi").html(name);

    function Cart() { };

    Cart.prototype.getCart = function () {
        return JSON.parse(localStorage.getItem('cartGoods')) || [];
    }
    
    //商品加入购物车
    Cart.prototype.addCart = function (product) {
        var cartGoods = this.getCart();
        //判断判断购物车是否存在该商品
        if (this.hasCart(product.id)) {
            for (var i = 0; i < cartGoods.length; i++) {
                if (cartGoods[i].id == product.id) {
                    cartGoods[i].num += 1;
    
                }
            }
    
        }
        else {
            cartGoods.unshift(product)
        }//若没有则直接加入
        // alert('成功加入购物车')
        localStorage.setItem('cartGoods', JSON.stringify(cartGoods));
    }
    Cart.prototype.hasCart = function (id) {
        var cartGoods = this.getCart();
        //判断id是否相同
        for (var i = 0; i < cartGoods.length; i++) {
            if (cartGoods[i].id == id) {
                return true;
            }
        }
        return false;
    
    }
    

var cart = new Cart();
$('.shopcar').click(function(){
    console.log(1)
    console.log(img,name,price)
    
    var product = {

        img: img,
        name: name,
        price: price,
        id: 21,
        num: 1
    }
    cart.addCart(product);
    location.href="http://127.0.0.1/mi/cartlist/cart.html";
}) 
   
 




 })


