<?php
	header('Content-Type:text/html;charset=utf-8');
	define('DDS',true);
	define('SCRIPT','message');
	session_start();
	//require __DIR__.'/inc/public.inc.php';
	
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>留言板</title>
<?php require __DIR__.'/inc/title.inc.php' ?>
</head>
<body>
<?php require __DIR__.'/inc/head.inc.php'; ?>
<div id="txt">
	<div class="msg_head">
		<textarea id="userinput" style="width: 900px;height: 150px;resize:none;"></textarea> 
		<input id="btn_msg" type="button" value="我要留言">
	</div>
	<ul class="user_msg">
		
	</ul>
</div>
</body>
</html>