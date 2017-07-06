<?php
	session_start();
	header('Content-Type:text/html;charset=utf-8');

	if($_POST['index']=='msg'){
		$sql = mysqli_connect("localhost", "root", "", "dds");
		$query = "SELECT m_username,m_time,m_text FROM message LIMIT 40";
		$rst = mysqli_query($sql,$query);
		$row = mysqli_fetch_all($rst,MYSQLI_ASSOC);
		for($i=0;$i<count($row);$i++){
			$row[$i]['m_text']=htmlspecialchars($row[$i]['m_text']);
		}
		
		echo json_encode($row);
		$sql->close();
	}
	
	if($_POST['index']=='leav'){
		if(!isset($_SESSION['username'])){
			exit('请登录');
		}
		$text = $_POST['text'];
		$sql = mysqli_connect("localhost", "root", "", "dds");
		$text = mysqli_real_escape_string($sql,$text);
		$query = "INSERT INTO message (m_username,m_time,m_text) VALUES ('{$_SESSION['username']}',NOW(),'$text')";
		$rst = mysqli_query($sql,$query);

		echo 0;
		$sql->close();
	}

?>
