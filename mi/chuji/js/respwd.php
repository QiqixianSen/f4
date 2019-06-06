<?php
   mysql_connect('127.0.0.1','root','root');
   mysql_query('use huan');
   $usename=$_POST["usename"];
   $ss="select * from lian where (title='$usename')";
   mysql_query($ss);
   $nu = mysql_affected_rows();

   if($nu>0){
      $res=[
         'code'=>200,
         'message'=>'即将跳转改密页面'
      ];
   }else{
      $res=[
         'code'=>-1,
         'message'=>'账号输入错误'
      ];
   };
   echo json_encode($res);