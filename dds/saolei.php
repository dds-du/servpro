
<?php
	header('Content-Type:text/html;charset=utf-8');
	define('DDS',true);
	define('SCRIPT','saolei');
	session_start();
	//require __DIR__.'/inc/public.inc.php';

?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>扫雷</title>
<?php require __DIR__.'/inc/title.inc.php' ?>
</head>
<body>
<?php require __DIR__.'/inc/head.inc.php'; ?>
<div id="bg"></div>
<div id="choice">
	<p>请选择每行的格子数量</p>
	<select id="num">
		<option value="8">8</option>
		<option value="9">9</option>
		<option selected="true" value="10">10</option>
		<option value="11">11</option>
		<option value="12">12</option>
		<option value="13">13</option>
		<option value="14">14</option>
		<option value="15">15</option>
	</select>
	<p>请选择难度</p>
	<select id="dif">
		<option value="0.1">简单</option>
		<option selected="selected" value="0.2">一般</option>
		<option value="0.3">困难</option>
	</select>
	<a href="javascript:;">确定</a>
</div>
<div id="start">游戏开始</div>
<div id="head1">扫雷游戏</div>
<ul id="wrap"></ul>
<div id="shadow">
	<p>Game Over!</p>
	<a href="javascript:;">确定</a>
</div>
<audio id="boom"  preload="auto">
	<source src="audio/boom.ogg" type="audio/ogg">
	<source src="audio/boom.mp3" type="audio/mp3">
</audio>
<audio id="click" preload="auto">
	<source src="audio/7571.ogg" type="audio/ogg">
	<source src="audio/7571.mp3" type="audio/mp3">
</audio>
<audio id="win" preload="auto">
	<source src="audio/win.ogg" type="audio/ogg">
	<source src="audio/win.mp3" type="audio/mp3">
</audio>
</body>
</html>