<?php
	header('Content-Type:text/html;charset=utf-8');
	define('DDS',true);
	define('SCRIPT','index');
	session_start();
	//require __DIR__.'/inc/public.inc.php';
	require __DIR__.'/userAgent.php';
?>


<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="keywords" content="DDS" >
<title>DDS个人网站</title>
<?php require __DIR__.'/inc/title.inc.php' ?>
</head>
<body>
<?php require __DIR__.'/inc/head.inc.php'; ?>
<div id="box">
	<ul id="wrap">
		<li>
			<img src="img/tim.jpg" alt="">
			<div class="mask"></div>
		</li>
		<li>
			<img src="img/star.png" alt="">
			<div class="mask"></div>
		</li>
		<li>
			<img src="img/zuma.jpg" alt="">
			<div class="mask"></div>
		</li>
		<li>
			<img src="img/pic.jpg" alt="">
			<div class="mask"></div>
		</li>
		<li>
			<img src="img/case2/food1.png" alt="">
			<div class="mask"></div>
		</li>
		<li>
			<img src="img/case3/bg1.jpg" alt="">
			<div class="mask"></div>
		</li>
		<li>
			<img src="img/1.jpg" alt="">
			<div class="mask"></div>
		</li>
		<li>
			<img src="img/time.jpg" alt="">
			<div class="mask"></div>
		</li>
		<li>
			<img src="img/360.jpg" alt="">
			<div class="mask"></div>
		</li>
		<li>
			<img src="img/520.jpg" alt="">
			<div class="mask"></div>
		</li>
	</ul>
</div>
<div id="mask">
	<p>
		对不起，您的浏览器版本过低，请升级您的浏览器或者使用标准浏览器，如：谷歌浏览器打开本站，对您造成的不便相当抱歉！！！
	</p>
</div>
<a id="toMsg" href="message.php" target="_blank">留言板</a>
</body>
</html>