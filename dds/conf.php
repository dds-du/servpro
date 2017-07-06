<?php
	header('Content-Type:text/html;charset=utf-8');
	define('DDS',true);
	define('SCRIPT','conf');
	session_start();
	//require __DIR__.'/inc/public.inc.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>管理员控制</title>
<?php require __DIR__.'/inc/title.inc.php' ?>
</head>
<body>
<table id="tab" class="tab" border="1">
	<tr class="tab_head">
		<th width="100">序号</th>
		<th width="400">用户信息</th>
		<th width="100">用户IP</th>
		<th width="100">时间</th>
		<th width="100">操作</th>
	</tr>
</table>
<div class="page_wrap">
	<ul class="page">
	</ul>
</div>

<input id="del_all" type="button" value="全部删除">
</body>
</html>