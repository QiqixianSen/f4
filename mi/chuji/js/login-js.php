
<?php
//数据查询接口
mysql_connect('127.0.0.1','root','root');
mysql_query('use huan');
$usename=$_POST["name"];
$pwd=$_POST['pwd'];
$sql="select * from lian where (title='$usename')";


$result=mysql_query($sql);

$rows=mysql_fetch_assoc($result);

if($rows && $pwd=="123456"){
    $res=[
        'code'=>200,
        'message'=>'成功登入，即将跳转...'
    ];
}else{
    $res=[
        'code'=>-1,
        'message'=>'账号或验证码错误'
    ];
};

echo json_encode($res);