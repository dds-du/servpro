<?php
	header('Content-Type:text/html;charset=utf-8');
	session_start();

	if(!isset($_SESSION['username'])){
		exit('非法入侵');
	}

	$sql = mysqli_connect("localhost", "root", "", "dds");
	
	if($_POST['index'] == 'userinfo'){
		$user = "SELECT u_power FROM users1 WHERE u_username = '{$_SESSION['username']}'";
		$power = mysqli_query($sql,$user);
		$row = mysqli_fetch_array($power);
		if($row['u_power']==1){
			$query = "SELECT * FROM userinfo";
			$rst = mysqli_query($sql,$query);
			echo (json_encode(mysqli_fetch_all($rst,MYSQLI_ASSOC)));
		}else{
			echo '没有权限的操作';
		}
	}

	if($_POST['index'] == 'del'){
		if($_POST['id']=='all'){
			$id = $_POST['id'];
			$del = "DELETE FROM userinfo";
			mysqli_real_query($sql,$del);
		}else{
			$id = $_POST['id'];
			$del = "DELETE FROM userinfo WHERE i_id = '$id'";
			mysqli_real_query($sql,$del);
		}
		

		echo 0;
	}

	$sql->close();

?>