<?php

	if(!defined('DDS')){
		exit('非法调用');
	}

?>
<div class="log_mask">
	<div id="log">
		<a href="javascript:;" class="del">x</a>
		<h2>DDS个人站登录页面</h2>
		<form id="form"> 
		   <span class="word">用户名</span>：<input id="user" type="text" name="name">
		   <p class="error error_user">请输入用户名</p>
		   <br><br>
		   <span class="word">密码：</span><input id="pass" type="password" name="pass">
		   <p class="error password">请输入6-8位密码</p>
		   <br><br>
		   <div class="reg_mask">
		   		<span class="word">确认密码：</span><input id="passd" type="password" name="email">
		   		<p class="error passsure"></p>
			   <br><br>
			   <span class="word">邮箱：</span><input type="text" id="mail">
			   <p class="error mailerror"></p>
			   <br><br>
			   <span class="word">性别：</span>
			   <input type="radio" name="gender" value="female">女性
			   <input id="sex" type="radio" checked name="gender" value="male">男性
			   <br><br>
		   </div>
			   
		   <div class="sure">
			   <span>验证码</span>
			   <input id="sure_text" type="text" name="sure">
			   <img src="sure.php" id="sure"></img>
			   <p>看不清？点击图片换一张</p>
		   </div> 
		   
		   <input type="button" id="reg_btn" class="reg_show" value="注册"> 
		   <input type="button" id="submit" value="登录"> 
		</form>
	</div>
</div>
	
<div id="header">
	<h1>欢迎大家来到DDS的个人网站！</h1>
	<div class="head_right">
		<ul>
			<li id="log_text"><span>您好，请登录</span><a href="#"></a></li>
			<li><a id="login" href="javascript:;">登录</a></li>
			<li><a id="reg" href="javascript:;">注册</a></li>
			<li><a id="quit" href="javascript:;">退出</a></li>
			<li><a id="conf" href="conf.php" target="_blank">管理</a></li>
		</ul>
	</div>
</div>