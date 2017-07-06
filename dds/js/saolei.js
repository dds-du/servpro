//JavaScript
window.onload = function(){
	var oUl = document.getElementById('wrap');
	var oBoom = document.getElementById('boom');
	var oClick = document.getElementById('click');
	var oWin = document.getElementById('win');
	var oBg = document.getElementById('bg');
	var oSd = document.getElementById('shadow');
	var oSt = document.getElementById('start');
	var oCho = document.getElementById('choice');
	var oBtn = oSd.getElementsByTagName('a')[0];
	var oBtn2 = oCho.getElementsByTagName('a')[0];
	var lat = 10;
	var dif = 2;
	var aLi = null;
	var aP = null;
	var ran = 0;
	var str = '';
	var clientH = document.documentElement.clientHeight;
	
	oBoom.volume = 0.6;
	oWin.volume = 0.6;
	//选择难度
	oBtn2.onclick = function(){
		lat = Number(oCho.children[1].value);
		dif = lat*Number(oCho.children[3].value);
		init(lat,dif);				
	}

	init(lat,dif);
	
	function init(lat,dif){
		//通过格子数确定父级宽度
		oUl.style.width = lat*50+'px';
		
		//创建格子
		str = '';
		for(var i=0;i<lat*lat;i++){
			str += '<li><a href="javascript:;"></a><p></p></li>';
		}
		oUl.innerHTML = str;
		
		//获取格子下的子元素
		aLi = oUl.getElementsByTagName('li');
		aP = oUl.getElementsByTagName('p');
		
		//随机获取炸弹格
		ran = random(lat*lat,Math.ceil(lat*dif));
		ran.sort();
		
		//创建炸弹格对应的span标签
		for(i=0;i<ran.length;i++){
			var oSp = document.createElement('span');		
			aLi[ran[i]].appendChild(oSp);
			aLi[ran[i]].mark = 'true';
		}
		//给li加自定义属性
		for(i=0;i<aLi.length;i++){
			aLi[i].onoff = true;
			aLi[i].index = i;
			aLi[i].aMark = true;
		}
		//给li加点击事件
		for(i=0;i<aLi.length;i++){
			aLi[i].addEventListener('click',fired,false);
			aLi[i].addEventListener('click',voice,false);			
			aLi[i].oncontextmenu = mask;	
		}
	}

	function voice () {//给点击加音效
		oClick.currentTime = 0;
		oClick.play();
	}

	function mask(ev){ //给格子添加右键标记地雷的事件函数
		var ev = ev||event;
		ev.preventDefault();
		if(this.aMark){
			this.children[0].innerHTML = "!";
		}else{
			this.children[0].innerHTML = "";
		}

		this.aMark = !this.aMark;
	}



		
	
	function fired(){	//点击事件函数
		this.onoff = false;
		this.children[0].style.display = 'none';
		if(this.mark){
			oBoom.currentTime = 0;
			oBoom.play();
			oSd.children[0].style.color = 'red';
			oSd.children[0].innerHTML = 'Game Over!'								
			oBg.style.height = clientH+'px';
			oBg.addEventListener('transitionend',show,false);										
		}		
		
		var l = this.offsetLeft;
		var t = this.offsetTop;
		var around = [];		
		var num = 0;

		for(i=0;i<aLi.length;i++){ //获取所点li的相邻项
			var nowL = aLi[i].offsetLeft;
			var nowT = aLi[i].offsetTop;
				
			if((Math.abs(nowL-l)<50||Math.abs(nowL-l)==50)&&(Math.abs(nowT-t)<50||Math.abs(nowT-t)==50)&&!(nowL==l&&nowT==t)){
				around.push(i);			
			}	
		}
		
		for(var i=0;i<around.length;i++){//计算li周围的炸弹数
			if(aLi[around[i]].mark){
				num++;
			}			
		}

		//通过li周围炸弹数决定后续操作
		if (num!=0) {
			this.children[1].innerHTML = num;
		}
		if (num==0) {
		//判断当所点按钮周围炸弹数为0时，自动打开周围格子并递归
			for(var i=0;i<around.length;i++){			
				if(aLi[around[i]].onoff&&!this.mark){					
					fired.call(aLi[around[i]]);
				}				
			}
		}	

		var success = true;
		//判断游戏成功
		for(i=0;i<aLi.length;i++){//既不被标记开关也是关着的
			if(!aLi[i].mark&&aLi[i].onoff){
				success = false;
			}
		}
		if(success){
			oWin.currentTime = 0;
			oWin.play();		
			oSd.children[0].style.color = 'green';
			oSd.children[0].innerHTML = '恭喜您，过关啦！';
			oBg.style.height = '100%';
			oBg.addEventListener('transitionend',show,false);
		}

		
		
	}
	function show () {			
		oBg.removeEventListener('transitionend',show,false);
		oSd.style.transform = 'none';
	}	 

	function hide () {
		oSd.removeEventListener('transitionend',hide,false);
		oBg.style.height = '0px';
	}

	oBtn.onclick = function(){
		oSd.style.transform = 'translate3d(0,-1000px,0px) scale(.01) rotateX(1080deg)';
		oSd.addEventListener('transitionend',hide,false);		
		for (var i = 0; i < aLi.length; i++) {
			aLi[i].children[0].style.display = 'none';
		}	
	}

	oSt.onclick = function(){
		lat = Number(oCho.children[1].value);
		dif = lat*Number(oCho.children[3].value);
		init(lat,dif);
	}
	

	//获取随机数函数
	function random(total,numb){
		var arr = [];
		var arr2 = [];

		for(var i=0;i<total;i++){
			arr.push(i);
		}
		for(i=0;i<numb;i++){
			arr2.push(arr.splice(Math.floor(Math.random()*arr.length),1));
		}
		return arr2;
	}

};