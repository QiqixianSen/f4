 $(function() {
      $(".login-left").on("click", function() {
        $(this)
          .addClass("color")
          .siblings()
          .removeClass("color");
        $(".login-form").css("display", "block");
        $(".login-sm").css("display", "none");
      });
      $(".login-right").on("click", function() {
        $(this)
          .addClass("color")
          .siblings()
          .removeClass("color");
        $(".login-form").css("display", "none");
        $(".login-sm").css("display", "block");
      });

      $(".login-area>a").click(function() {
        var val = $(this).html();
        if (val == "手机短信登录/注册") {
          $(this).html("用户密码登录");
          $("#phone-login")
            .css("display", "block")
            .prev()
            .css("display", "none");
        } else {
          $(this).html("手机短信登录/注册");
          $("#phone-login")
            .css("display", "none")
            .prev()
            .css("display", "block");
        }
      });

      //获取四个icon的href
      $.ajax({
        type: "post",
        url: "../js/ahref.json",
        cahe: false,
        dataType: "json",
        success: function(res) {
          var i = 0;
          for (var key in res) {
            $(".icon>a")
              .eq(i)
              .attr("href", res[key]);
            i++;
          }
        }
      });

      // 修改时红框消失
      $("#name-zh").keyup(function(){
        $("#notice").css("display",'none').children("span").html("请输入账号");
          $("#name-zh").css("border","1px solid #ccc");
          $("#pwd-zh").css("border","1px solid #ccc");
      })
      $("#pwd-zh").keyup(function(){
        $("#notice").css('display','none').children('span').html('请输入密码');
          $("#pwd-zh").css("border","1px solid #ccc");
          $("#name-zh").css("border","1px solid #ccc");
      })
      //点击登录
      $("#btn-zh>input").click(function(){
        var namezh=$("#name-zh").val();
        var pwdzh=$("#pwd-zh").val();
        $("#name-zh").css("border-color","");
        $("#pwd-zh").css("border-color","");
        var reg=/(^\w+((-w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$)|(^1\d{10}$)|(^\d{3,}$)|(^\w{5,}$)/;
        if(namezh==""){
          $("#notice").css("display",'block').children("span").html("请输入账号");
          $("#name-zh").css("border","1px solid #f66");
          return;
        }else if(pwdzh==''){
          $("#notice").css('display','block').children('span').html('请输入密码');
          $("#pwd-zh").css("border","1px solid #f66");
          return;
        }else if(!reg.test(namezh)){
          $("#notice").css("display",'block').children("span").html("用户名不正确");
          $("#name-zh").css("border","1px solid #f66");
          return;
        }else if(!/^[a-zA-Z0-9_-]{6,}$/.test(pwdzh)){
          $("#notice").css("display",'block').children("span").html("用户名或密码不正确");
          $("#name-zh").css("border","1px solid #f66");
          return;
        };
        $.ajax({
          type: "post",
          url: "../js/login.php",
          data:{
            "name":namezh,
            'pwd':pwdzh
          },
          cahe: false,
          dataType: "json",
          success: function(res){
            console.log(res)
            if(res.code==200){
              alert(res.message);
              location.href="../../home page/homepage.html"
            }else{
              $("#notice").css("display",'block').children("span").html("用户名或密码不正确");
              $("#name-zh").css("border","1px solid #f66");
            }
          }
        })
      });

      // 修改时红框消失
      $(".inp1").on('keyup',function(){
        $('#notice-sj').css('display','none ').children('span').html('');
          $(".inp1").css("border","1px solid #ccc");
      })
      $(".inp2").on('keyup',function(){
        $('#notice-sj').css('display','none').children('span').html('请输入验证码')
          $(".inp2").css("border","1px solid #ccc");
      })


      $('#btn-sj>input').on('click',function(){
        console.log(111)
        var numPho=$(".inp1").val();
        var reg=/^1[3-9]\d{9}$/;
        $(".inp1").css("border-color","");
        $(".inp2").css("border-color","");
        if(numPho==''){
          $('#notice-sj').css('display','block').children('span').html('请输入手机号码')
          $(".inp1").css("border","1px solid #f66");
          return;
        } else if(!reg.test(numPho)){
          $('#notice-sj').css('display','block').children('span').html('手机号码格式不正确')
          $(".inp1").css("border","1px solid #f66");
          return;
        }else if($('.inp2').val()==''){
          $('#notice-sj').css('display','block').children('span').html('请输入验证码')
          $(".inp2").css("border","1px solid #f66");
          return;
        }else if($('.inp2').val().length!=6){
          
          $('#notice-sj').css('display','block').children('span').html('验证码时输入有误');
          $(".inp2").css("border","1px solid #f66");
          return
        }else{
          $('#notice-sj').css('display','none')
        }
        $.ajax({
          type: "post",
          url: "../js/login-js.php",
          data:{
            "name":numPho,
            'pwd':$('.inp2').val()
          },
          cahe: false,
          dataType: "json",
          success: function(res){
            if(res.code==200){
              alert(res.message);
              location.href="http://127.0.0.1/mi/home%20page/homepage.html"
            }else{
              $("#notice-sj").css("display",'block').children("span").html("用户名或密码不正确");
              $(".inp1").css("border","1px solid #f66");
            }
            
          }
        })

      })

    });