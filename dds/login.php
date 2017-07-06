<?php
	/*
		本页用来对前端登录和注册数据进行数据库验证和入库
		接收方式:POST方式
		参数:
			index:必须，规定行为类型.
				usersure:验证用户名
					username:接收需要验证的用户名，验证是否在数据库中存在
				sure:验证验证码
					code:接收验证码
				log:登录验证，验证用户名和密码
					username:接收用户名
					password:接收密码
				reg:注册，并向数据库提交数据
					username/password/mail/sex
	*/


	session_start();
	if($_POST['index']=='usersure'){
		$name = $_POST['username'];
		$sql = mysqli_connect("localhost", "root", "", "dds");
		$query = "SELECT * FROM users1 WHERE u_username='$name'";
		$result = mysqli_query($sql,$query);
		/*if(!mysqli_num_rows($result)){
			echo 0;
		}else{
			echo 1;
		}*/
		echo mysqli_num_rows($result);
		$sql->close();
	}

	if($_POST['index']=='sure'){
		if($_POST['code']==$_SESSION['sure']){
			echo 0;
		}else{
			echo 1;
		}
	}

	if($_POST['index']=='log'){
		$name = $_POST['username'];
		$pass = $_POST['password'];
		
		$sql = mysqli_connect("localhost", "root", "", "dds");
		$query = "SELECT * FROM users1 WHERE u_username='$name' and u_password=md5('$pass')";
		$result = mysqli_query($sql,$query);
		if(mysqli_num_rows($result)){
			$_SESSION['username']=$name;
			$arr_log['num']=0;
			$arr_log['user']=$_SESSION['username'];
		
			$user = "UPDATE users1 SET u_lastIP='{$_SERVER['REMOTE_ADDR']}',u_lasttime=NOW() WHERE u_username='$name'";
			mysqli_query($sql,$user);
			
			echo json_encode($arr_log);
		}else{
			$arr_log['num']=1;
			echo json_encode($arr_log);
		}
		
		$sql->close();
	}

	if($_POST['index']=='reg'){
		$name = $_POST['username'];
		$pass = $_POST['password'];
		$mail = $_POST['mail'];
		$sex = $_POST['sex'];
		$un = md5(uniqid(rand(),true));
		
		$sql = mysqli_connect("localhost", "root", "", "dds");
		$query = "INSERT INTO users1 (u_username,u_password,u_mail,u_sex,u_birth,u_lasttime,u_lastIP,u_uniqid) VALUES('$name',md5('$pass'),'$mail','$sex',NOW(),NOW(),'{$_SERVER['REMOTE_ADDR']}','$un')";
		$result = mysqli_query($sql,$query) or die('0');
		$_SESSION['username']=$name;
		$arr_reg['num']=1;
		$arr_reg['user']=$_SESSION['username'];
		echo json_encode($arr_reg);

		$sql->close();
	}

	if($_POST['index']=='quit'){
		session_unset();
		session_destroy();
		setcookie(session_name(),'',time()-1);
		
		echo 0;
	}

	if($_POST['index']=='init'){
		if(isset($_SESSION['username'])){
			$arr_init['num'] = 1;
			$arr_init['user'] = $_SESSION['username'];

			echo json_encode($arr_init);
		}
	}

?>
