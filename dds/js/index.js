//JavaScript

if (document.attachEvent) {
	document.attachEvent('onreadystatechange', function () {
        if(document.readyState=="complete") {
            document.detachEvent("onreadystatechange", arguments.callee);
     		callback();
   		}
	})
}else if (document.lastChild == document.body) {
    callback();
}

function callback(){
	//在ie6789下，拒绝访问
	var user = navigator.userAgent;
	
	if(/IE [6789]/.test(user)){
		document.getElementById('mask').style.display = 'block';
	}
}
$(function(){//调整头部字的数量
	head();
	function head(){
		if(document.body.clientWidth<900){
			$('#header').find('h1').html('欢迎');
		}else if(document.body.clientWidth<1600){
			$('#header').find('h1').html('欢迎大家来到DDS的个人站');
		}else{
			$('#header').find('h1').html('欢迎大家来到DDS的个人站！点击下面的图片，可以发现一些新东西哦!');
		}
	}
	window.onresize=head;
});
window.onload = function(){
	var oBox = document.getElementById('box');
	var aImg = oBox.getElementsByTagName('li');
	var rap = document.getElementById('wrap');
	var timer = null;
	var rapRot = 0;
	var onoff = true;

	var len = aImg.length;
	for (var i = 0; i < len; i++) {
		aImg[i].style.transition = '2s '+ .5*i +'s';
		aImg[i].index = i;
	}
	for (var i = 0; i < len; i++) {
		coor(aImg[i],i);
	}
	
	function coor(obj,i){//计算角度，确定位置与偏移量
		var r = 300;

		obj.style.transform = 'translateX('+ (r*Math.cos(2*Math.PI/len*i)+390) +'px) translateZ('+ r*Math.sin(2*Math.PI/len*i) +'px) rotateY('+ (2*Math.PI/len*(len-i)+Math.PI/2) +'rad)  rotateX(0rad)';
	}	
	
	
	//判定初始化时鼠标是否在图片墙内
	rap.addEventListener('mouseenter',ent);
	rap.addEventListener('mouseleave',lea);
	function ent () {
		onoff = false;
	}
	function lea () {
		onoff = true;
	}

	
	aImg[len-1].addEventListener('transitionend',init);
	function init(){//页面初始化
		for (var i = 0; i < len; i++) {
			aImg[i].style.transition = 'none';
		}
		aImg[len-1].removeEventListener('transitionend',init);	
		
		rap.onmouseover = function(ev){//移入停止旋转
			if(ev.target.nodeName==='DIV'){
				ev.target.style.opacity = 0;
			}	
			clearInterval(timer);
		}

		rap.onmouseout = function(ev){//移出开始旋转
			if(ev.target.nodeName==='DIV'){
				ev.target.style.opacity = '.2';
			}	
			timer = setInterval(function(){
				rapRot -= 1;
				rap.style.transform = 'rotateY('+ rapRot +'deg)';
			},30);
		}
		
		rap.onclick = function(ev){//点击效果
			if(ev.target.nodeName==='DIV'){
				var loop =  ev.target.parentNode.index;
				console.log(loop);
				switch (loop) {
					case 0:
						window.open('saolei.php');
						break;
					case 1:
						window.open('3dshow.html');
						break;
					case 2:
						window.open('zuma.php');
						break;
					case 3:
						window.open('case1.html');
						break;
					case 4:
						window.open('case2.html');
						break;
					case 5:
						window.open('case3.html');
						break;
					case 6:
						window.open('sign.html');
						break;
					case 7:
						window.open('timeofserver.html');
						break;
					case 8:
						window.open('360sign');
						break;
					case 9:
						window.open('other.html');
						break;
				}
				
			}	
		}
		if(onoff){//在图片位置确定后旋转图片墙
			timer = setInterval(function(){
				rapRot -= 1;
				rap.style.transform = 'rotateY('+ rapRot +'deg)';
			},30);
		}
		rap.removeEventListener('mouseenter',ent);
		rap.removeEventListener('mouseleave',ent);
	}

	var zy = document.createElement('audio');
	zy.src = "audio/zenyang.mp3";
	zy.autoplay = 'true';
	document.body.appendChild(zy);
	
}