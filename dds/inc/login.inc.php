<?php

	if(!defined('DDS')){
		exit('非法调用')；
	}

?>
<div class="log_mask">
	<div id="log">
		<a href="javascript:;" class="del">x</a>
		<h2>DDS个人站登录页面</h2>
		<form> 
		   用户名：<input id="user" type="text" name="name">
		   <span class="error"></span>
		   <br><br>
		   密码：<input id="pass" type="password" name="pass">
		   <span class="error"> </span>  
		   <br><br>
		   <div class="sure">
			   <span>验证码</span>
			   <input id="sure_text" type="text" name="sure">
			   <div id="sure"></div>
		   </div> 
		   
		   <br><br>
		   <input type="button" id="submit" value="提交"> 
		</form>
	</div>
</div>
	
<div id="header">
	<h1>欢迎大家来到DDS的个人网站！点击下面的图片，可以发现一些新东西哦！</h1>
	<div class="head_right">
		<ul>
			<li id="log_text">您好，请登录<span></span></li>
			<li><a id="login" href="javascript:;">登录</a></li>
			<li><a id="reg" href="javascript:;">注册</a></li>
		</ul>
	</div>
</div>