<?php
   mysql_connect('127.0.0.1','root','root');
   mysql_query('use huan');
   $usename=$_POST["usename"];
   $pwd=$_POST['pwd'];
   $ss="select * from lian where (title='$usename')";
   mysql_query($ss);
   $nu = mysql_affected_rows();

   if(!$nu>0){
      $sql="insert into lian(title,content)  values('$usename','$pwd')";
      mysql_query($sql);
      $num = mysql_affected_rows();
      if($num >0){
         $res=[
            'code'=>200,
            'message'=>'成功注册，即将跳转登录页面'
         ];
      };
   
   }else{
      $res=[
         'code'=>-1,
         'message'=>'用户名已存在'
      ];
   };
   echo json_encode($res);