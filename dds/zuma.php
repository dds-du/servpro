<?php
	header('Content-Type:text/html;charset=utf-8');
	define('DDS',true);
	//define('SCRIPT','index');
	session_start();
	
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>DDS's Zuma Game</title>
<link rel = "Shortcut Icon" href="img/dds.png">
<link rel="stylesheet" href="css/main.css">
<link rel="stylesheet" href="css/zuma.css">
<script type="text/javascript" src="js/zuma.js"></script>
</head>
<body>
<?php require __DIR__.'/inc/head.inc.php'; ?>
<div id="box">
	<canvas id="cv" width="600" height="600">	
	</canvas>
	
</div>
<div class="score">
	<span>得分:</span>
	<span id="score"></span>
</div>
<div id="btn">游戏开始</div>
<p>游戏说明:请勿击中黑色小球，击中橙色小球得1分，橙色小球到达终点或者击中黑色小球，游戏结束。</p>
<audio id="ad"autoplay loop src="audio/sweet.mp3"></audio>
</body>
</html>