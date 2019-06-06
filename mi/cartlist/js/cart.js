function Recommend() { };

//读取localstorage中所有的数据
Recommend.prototype.getGoods = function () {
    return JSON.parse(localStorage.getItem('localData')) || [];

}

//将推荐商品随机添加到localstorage里面
Recommend.prototype.loadGoods = function () {

    $.get('js/product.json', function (res) {
        var str = [];
        for (var i = 0; i < 10; i++) {
            var index = parseInt(Math.random() * res.length);
            str.push(res[index]);
           
                     }             
          
        localStorage.setItem('localData', JSON.stringify(str));
        getGoods();//因为异步函数最后执行，如果把该函数写在外面的话，这个异步函数还未执行，所以获取不到数据，出现页面数据为空；要解决该问题，可将相关函数写在异步函数内
    })

}
function hasEle(arr, num) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == num) {
            return true
        }
    }
    return false;

}

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

//判断购物车是否存在该商品
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



//删除商品
Cart.prototype.delCarts = function (id) {
    var cartGoods = this.getCart();
    for (var i = 0; i < cartGoods.length; i++) {
        if (cartGoods[i].id == id) {
            cartGoods.splice(i, 1);
            localStorage.setItem('cartGoods', JSON.stringify(cartGoods));
            return true;
        }
    }
    return false;
}


//编辑修改商品数量
Cart.prototype.editInputCarts = function (id, num) {
    var cartGoods = this.getCart();
    for (var i = 0; i < cartGoods.length; i++) {
        if (cartGoods[i].id == id) {
            cartGoods[i].num = num;
            console.log(num);
            console.log(cartGoods[i].num);
            localStorage.setItem('cartGoods', JSON.stringify(cartGoods));
            return true;
        }
    }
    return false;
}
//获取购物车中商品总数量
Cart.prototype.sumCart = function () {
    console.log(999);

    var totalNum = 0;//加入购物车的商品数量
    var cartGoods = this.getCart();
    for (var i = 0; i < cartGoods.length; i++) {
        totalNum += parseInt(cartGoods[i].num);
    }
    return totalNum;
}


//定义一推荐商品对象
var recommend = new Recommend();
recommend.loadGoods();

//------------------------------------------------------------------获取本地储存的商品，显示在页面---------------------------------------

function getGoods() {
    var recommendList = recommend.getGoods();
    var str = ``;
    for (var i = 0; i < recommendList.length; i++) {
        console.log(recommendList[i])

        str += ` <li class="fl recommend-list-li">
                        <dl>
                            <dt>
                                <img src="${recommendList[i].img}" alt="">
                            </dt>
    
                            <dd class="product-name"><p>${recommendList[i].name}</p></dd>
                            <dd class="product-price">${recommendList[i].price}元</dd>
                            <dd>
                                <button class="recommend-add " onclick="addon(this)">加入购物车</button>
                                <span class="comment">1111人好评</span>
                            </dd>
                            <dd class="product-id">${recommendList[i].id}</dd>
                            <dd class='success-info'><div>成功加入购物车</div></dd>
                        </dl>
                    </li>
    
            `
        $('.recommend-list').html(str);

    }
    // 将鼠标移入li，显示加入购物车按钮-
    $('.recommend-list-li').mouseover(function () {
        $(this).find('.recommend-add').show();
        $(this).find('.comment').hide();

    })
    $('.recommend-list-li').mouseleave(function () {
        $(this).find('.recommend-add').hide();
        $(this).find('.comment').show();
    })


}





//-----------------------------------------------------------------点击加入购物车后，将数据保存至本地储存  
var cart = new Cart();
function addon(ele) {
    var dl = ele.parentElement.parentElement;
    var product = {

        img: dl.children[0].children[0].src,
        name: dl.children[1].children[0].innerHTML,
        price: dl.children[2].innerHTML,
        id: dl.children[4].innerHTML,
        num: 1
    }
    $(ele).parents('.recommend-list-li').find('.success-info').children().show();//点击加入购物车，成功加入的提示显示出来
    cart.addCart(product);
    setTimeout(function () {
        location.reload()
    }, 1000)//延时1秒，再重新加载该页面

}

//------------------------------------------------------------------将本地储存的数据加载在购物车中-------------------------------
var dataCart = cart.getCart();
var string = ``;
for (var i = 0; i < dataCart.length; i++) {
    string += `
    <div class='goods'>
    <span class="col-check" >
                        <input type="checkbox" name="" id="" class = 'single-check'  value ="${dataCart[i].num}" >
                    </span>
                    <span class="col-img">
                        <a href="#">
                        <img src="${dataCart[i].img}" alt="">
                    </a>
                    </span>
                    <span class="col-name">
                        ${dataCart[i].name}
                    </span>
                    <span class="col-price">
                        ${dataCart[i].price}
                    </span>
                    <span class="col-num col-nums clearfix"><button class="minus" >-</button>
                        <input type="text" value="${dataCart[i].num}" class="goods-num" ><button class="plus" >+</button>
                    </span>
                    <span class="col-tatal col-total">
                        ${parseFloat(dataCart[i].price) * dataCart[i].num} 元
                    </span>
                    <span class="col-action" onclick = "del(${dataCart[i].id})" index= '${dataCart[i].id}'>
                        <button class="iconfont icon-jiufuqianbaoicon08"></button>
                    </span>
   
    </div>
    <div class="gift-box">
    <span class="gift-img"><a href="#"><img src="img/zengpin.jpg" alt=""></a></span>
    <span class='gift-detail'>
        <div>赠品</div>
        <p>米粉卡日租卡</p>
    </span>
    <div class = 'gift-num'>1</div>
</div>
    `
    $('.product-detail ').html(string);
    //根据购物车是否为空，显示温馨提示。
    //官网新增一p标签
    if ($('.product-detail ').html() == null) {

        $('.title > i').html('');
        //隐藏购物车为空时的提示



    } else {
        $('.title > i').html('温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算')
        $('.noGoods').css('display', "none");
        $('.table').css('background', "#fff").css('height', "100%");
        $('.list-count').css('display', "block");
        $('.table-head').css('display', "block");
    }



}


//----------------------------------------------------------------------删除商品-------------------------------------
function del(id) {
    if (!confirm('确认删除')) {
        return;
    } else {
        if (cart.delCarts(id)) {
            location.reload();
        } else {
            alert('删除失败');
        }

    }

}
var allCheckbox = $('input[type="checkbox"]')//页面中全部的checkbox
var allCheck = $('.all-check');//全选按钮
var sonCheck = $('.single-check');//单选按钮


//----------------------------------点击全选按钮------------------------------------------------
allCheck.click(function () {
    if (this.checked) {
        sonCheck.prop('checked', true);
        $('.gift-box').eq(0).show().siblings('.gift-box').hide()
        // $('.countGoods').prop('disabled',false).css("background","#ff6700");
        // $('.message').css('display','none');//勾选后结算按钮可点，且提示信息隐藏
    }
    else {
        sonCheck.prop('checked', false);
        $('.gift-box').eq(0).hide();

        // $('.countGoods').prop('disabled',true).css("background"," #ccc");
        // $('.message').css('display','block');//反之
    }
    totalMoney();
})
//-------------------------------------点击单选按钮---------------------------------
sonCheck.each(function () {

    $(this).click(function () {
        var len = sonCheck.length;
        var num = 0;
        var target = 0;
        sonCheck.each(function () {

            if (this.checked) {
                num++;
                $(this).parents(".goods").siblings(".gift-box").eq(target).show().siblings(".gift-box").hide();
                console.log($(this).parent())

            } else {
                $(this).parents(".goods").siblings(".gift-box").eq(target).hide();
            }
            // $(this).parents(".product-detail").find(".gift-box").hide();
            target++;

        });
        if (num == len) {
            allCheck.prop('checked', true);
        }
        else {
            allCheck.prop('checked', false);
        }

        totalMoney();

    })
})

//---------------------------------------总计-----------------------
var num = 0;
function totalMoney() {
    var total_money = 0;
    var total_count = 0;


    sonCheck.each(function () {
        if (this.checked) {
            var price = parseFloat($(this).parents('.goods').find('.col-tatal').html());
            num = parseInt($(this).attr('value'));
            total_money += price;
            total_count += num;
            console.log(num)
        }
    });//遍历每个单选按钮
    console.log(total_money, total_count)
    $('.countMoney > span').html(total_money);
    if (total_count == 0) {
        $('.buyDetail-num').siblings().html(total_count);
    }
    else {
        $('.buyDetail-num').siblings().html(total_count + 1);
    }


    if (total_money != 0 && total_count != 0) {
        if (!$('.countGoods').hasClass('canBtn')) {
            $('.countGoods').addClass('canBtn');
            $('.countGoods').prop('disabled', false).css("background", "#ff6700");
            $('.message').css('display', 'none');
            $('.buyDetail-num').html(cart.sumCart() + 1);

        }
    } else {
        if ($('.countGoods').hasClass('canBtn')) {
            $('.countGoods').removeClass('canBtn');
            $('.countGoods').prop('disabled', true).css("background", " #ccc");
            $('.message').css('display', 'block');
            $('.buyDetail-num').html(cart.sumCart());
        }
    }
}


//--------------------------------------------------------------点击增加按钮--------------------------
$('.plus').click(function () {
    var count = parseInt($(this).prev().val()) + 1;
    var colTatal = $(this).parents('.goods').find('.col-tatal');
    var price = parseFloat($(this).parents('.goods').find('.col-price').html()); //单价
    var priceTotal = 0;
    var id = $(this).parents('.goods').find('.col-action').attr('index');
    $(this).prev().val(count);
    priceTotal = count * price;
    colTatal.html(priceTotal + '元');
    cart.editInputCarts(id, count);
    $(this).parents('.goods').find('.single-check').attr('value', count);

    totalMoney();


    $('.buyDetail-num').html(cart.sumCart());
})
//---------------------------------------------------------------点击减少按钮--------------------------
$('.minus').click(function () {
    var oldCount = parseInt( $(this).next().val() );

    if(oldCount <= 1){
        alert('数量最少为1');
        return;
    }//需先判断是否符合条件，再减，不符合则return，不执行下面

    var count = oldCount - 1;
    var colTatal = $(this).parents('.goods').find('.col-tatal');
    var price = parseFloat($(this).parents('.goods').find('.col-price').html());
    var priceTotal = 0;
    var id = $(this).parents('.goods').find('.col-action').attr('index');
    console.log(count, colTatal, price)
    // if ($(this).next().val() > 1) {
        $(this).next().val(count);
        priceTotal = count * price;
        colTatal.html(priceTotal + '元');
        console.log(typeof $(this).next().val())
    
   
    
    cart.editInputCarts(id, count);
    $(this).parents('.goods').find('.single-check').attr('value', count);
    totalMoney();
    $('.buyDetail-num').html(cart.sumCart());
})
//----------------------------------------------------------商品数量输入框修改数量------------------------------
$(".goods-num").keyup(function () {
    var count = 0;
    var colTatal = $(this).parents('.goods').find('.col-tatal');
    var price = parseFloat($(this).parents('.goods').find('.col-price').html());
    var priceTotal = 0;
    var id = $(this).parents('.goods').find('.col-action').attr('index');
    $(this).val($(this).val().replace(/\D|^0/g, ''));
    count = $(this).val();

    priceTotal = count * price;
    $(this).attr('value', count);
    colTatal.html(priceTotal + '元');
    $(this).parents('.goods').find('.single-check').attr('value', count);
    totalMoney();
    cart.editInputCarts(id, count);
    $('.buyDetail-num').html(cart.sumCart());
})

$('.buyDetail-num').html(cart.sumCart());



//------------------------------------------------------------固定结算栏-----------------------
var t = $('.list-count').offset().top;
console.log(t)
if (t > 765) {
    $('.list-count').addClass('p-fixed');
}else{
    $('.list-count').removeClass('p-fixed');
}
$(window).scroll(function () {
    var countHeight = $('.list-count').height();
    var stop = $(document).scrollTop();
    if (stop>=t-765) {
        $('.list-count').addClass('p-static');
    }else{
        $('.list-count').removeClass('p-static');
       
    }

console.log(stop,t-500,t)
})










