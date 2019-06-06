
   function getRand(minNum, maxNum) {
      return parseInt(Math.random() * (maxNum - minNum + 1)) + minNum;
    }
    function getYZM(num) {
      //由数字，字母（分大小写）
      //以上字符由ASCII码表来
      //随机而来
      var yzm = "";
      for (var i = 0; i < num; i++) {
        //获取数字或字母（分大小写）的字符
        //随机获取ASCII码
        var rand = getRand(48, 122);
        if ((rand >= 58 && rand <= 64) || (rand >= 91 && rand <= 96)) {
          i--;
        } else {
          yzm += String.fromCharCode(rand);
        }
      }
      return yzm;
    }

    function getColor() {
      var color = "0123456789abcdef";
      var str = "#";
      for (var i = 0; i < 6; i++) {
        var rand = getRand(0, 15);
        str += color.charAt(rand);
      }
      return str;
    }

    
