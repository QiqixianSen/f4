$(function(){
   $(".def-country").click(function() {
     $(".dis-country").css("display",'block');
    
     $("#seach-con").focus()
     //ajax请求接收国家地区信息
     $.ajax({
       type: "post",
       url: "../js/country.json",
       cahe: false,
       dataType: "json",
       success: function(res) {
         // console.log(res);
         var str = ``;
         for (var i = 0; i < res.length; i++) {
           str += `<li>${res[i]}</li>`;
         }
         $(".dis-country ul").html(str);
         
       }
     });
     return false;
   });
   // $("#seach-con").on("blur",function(){
   //   $(".dis-country").css("display",'none');
   // })
   // $("#seach-ph").on("blur",function(){
   //   $(".phone-box").css("display",'none');
   // })
   $(".result-id").click(function() {
     $(".phone-box").css("display",'block');
     
     $("#seach-ph").focus()
     //ajax请求接收国家地区信息
     $.ajax({
       type: "post",
       url: "../js/country.json",
       cahe: false,
       dataType: "json",
       success: function(res) {
         // console.log(res);
         var str = ``;
         for (var i = 0; i < res.length; i++) {
           str += `<li>${res[i]}</li>`;
         }
         $(".phone-box ul").html(str);
         
       }
     });

     //ajax请求接收电话信息
     $.ajax({
       type: "post",
       url: "../js/phone.json",
       cahe: false,
       dataType: "json",
       success: function(res) {
         // console.log(res);
         var str = ``;
         for (var i = 0; i < res.length; i++) {
           var span =$("<span></span>")
           span.html(res[i]);
           $(".phone-box ul>li").eq(i).append(span)
         }
       }
     });
     return false;
   });
   //鼠标移入li中背景切换
   $(".dis-country>ul,.phone-box>ul").on("mouseover","li",function(){
     $(this).addClass("bg-color").siblings().removeClass("bg-color")
   });
   
   var index=0;//定义li的下标
   //鼠标点击li，result-country内容改为li的内容
   $(".dis-country>ul").on("click","li",function(){
     index=$(this).index();
     $(".result-country").html($(this).text());
     $(".dis-country").css("display",'none');
     $
     return false;
   });



   $(document).on('click',function(){
     $(".phone-box").css("display",'none');
     $(".dis-country").css("display",'none');
     
   })


   $(".phone-box>ul").on("click","li",function(){
    
     
     index=$(this).index();
     console.log($(".result-id>span"))
     $(".result-id>span").html($(this).children("span").text());
     $(".phone-box").css("display",'none');
     $("#seach-ph").unbind('blur');

     return false;
   });


   //定义一个开关，表示是否同意协议
   var flag=false;

   //点击.treaty
   $(".treaty").click(function(){
     // $(".phone").off();
     if(flag){
       $(this).children("i").css("background-position","left -37px top 0px");
       
       flag=false;
       return;
     }
     $(this).children("i").css("background-position","left -18px top 0px");
     $("#treaty").css("display","none")
     flag=true;
   })

   $(".phone").on('blur',function(){
     console.log('haha')
     var phoneVal=$(".phone").val();
     var reg=/^1[3-9]\d{9}$/;
     if(!flag){
       $("#treaty").css("display","block")
      }else{
        $("#treaty").css("display","none")
      }
     if(phoneVal==""){
       $('#phone-space>span').html("请输入手机号码");
       
       $(".phone").css("border","1px solid #f66");
       $("#phone-space").css("display","block")
       return;
     }
     if(!reg.test(phoneVal)){
       $("#phone-space").css("display","block");
       $('#phone-space>span').html("手机号码格式错误")
       $(".phone").css("border","1px solid #f66");
     }else{
       $("#phone-space").css("display","none");
       $(".phone").css("border","");
       $("#treaty").css("display","none")
     }
   })

   $(".phone").on('keyup',function(){
     $("#phone-space").css("display","none");
     $(".phone").css("border","");
     $("#treaty").css("display","none")
   })
   
   //点击注册
   $('#btn').click(function(){
     var phoneVal=$(".phone").val();
     var reg=/^1[3-9]\d{9}$/;
     // $(".phone").off();
     // console.log('flag',flag)
     if(!flag){
       $("#treaty").css("display","block")
       return
      }else{
       $("#treaty").css("display","none")
     
     }
     if(phoneVal==""){
       $('#phone-space>span').html("请输入手机号码");
       
       $(".phone").css("border","1px solid #f66");
       $("#phone-space").css("display","block")
       return;
     }
     
     if(!reg.test(phoneVal)){
       $("#phone-space").css("display","block");
       $('#phone-space>span').html("手机号码格式错误")
       $(".phone").css("border","1px solid #f66");
       return;
     }else{
       $("#phone-space").css("display","none");
       $(".phone").css("border","");
       $("#treaty").css("display","none")
     }
     location.href="http://127.0.0.1/mi/chuji/html/reg.html?"+phoneVal;
     
   })

 })