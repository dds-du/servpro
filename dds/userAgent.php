<?php
	
	$sql = mysqli_connect("localhost", "root", "", "dds");
		
	$query = "INSERT INTO userinfo (i_useragent,i_ip,i_time) VALUES('{$_SERVER['HTTP_USER_AGENT']}','{$_SERVER['REMOTE_ADDR']}',NOW())";
	$result = mysqli_query($sql,$query) or die('0');

	$sql -> close();
?>
