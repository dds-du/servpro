//JavaScript

window.onload = function(){
	var oAd = document.getElementById('ad');
	var oC = document.getElementById('cv');
	var oGc = oC.getContext('2d');
	var oBtn = document.getElementById('btn');
	var oP = document.getElementById('score');
	var iR = 0;
	var onoff = true;
	var oImg = new Image();
	var timer = null;
	var score = 0;

	oAd.volume = 0.5;

	oImg.src = 'img/11.png';

	oImg.onload = function(){
		oBtn.onclick = function(){
			game();
		}		
	}

	function game(){
		var bullet = [];	
		
		setInterval(function(){
			oGc.clearRect(0,0,600,600);
			
			oGc.beginPath();
			oGc.arc(300,200,200,-90*Math.PI/180,Math.PI);
			oGc.stroke();

			oGc.beginPath();
			oGc.arc(250,200,150,Math.PI,2*Math.PI);
			oGc.stroke();

			
			for (var i = 0; i < ball.length; i++) {
				if(ball[i].color != 0){
					oGc.save();
					oGc.fillStyle = 'orange';
					oGc.beginPath();
					oGc.arc(ball[i].x,ball[i].y,ball[i].r,0,2*Math.PI);
					oGc.closePath();
					oGc.fill();
					oGc.restore();
				}else{					
					oGc.save();
					oGc.fillStyle = 'black';
					oGc.beginPath();
					oGc.arc(ball[i].x,ball[i].y,ball[i].r,0,2*Math.PI);
					oGc.closePath();
					oGc.fill();
					oGc.restore();
				}

			}	

			for (i = 0; i < bullet.length; i++) {
				oGc.save();
				oGc.fillStyle = 'red';
				oGc.beginPath();
				oGc.arc(bullet[i].x,bullet[i].y,bullet[i].r,0,2*Math.PI);
				oGc.closePath();
				oGc.fill();
				oGc.restore();
			}
	
			oGc.save();
			oGc.translate(300,200);		
			oGc.rotate(iR);
			oGc.translate(-40,-40);
			oGc.drawImage(oImg,0,0);
			oGc.restore();

			oGc.save();
			line=oGc.createLinearGradient(100,400,400,600);
			line.addColorStop(0,'red');
			line.addColorStop(0.25,'#8326C5');
			line.addColorStop(0.5,'#B736DA');
			line.addColorStop(0.75,'#4CD863');
			line.addColorStop(1,'blue');
			oGc.font = '50px impact';
			oGc.baseline = 'top';
			var str1 = '作者:DDS';
			var m1 = oGc.measureText(str1).width;
			oGc.fillStyle = line;
			oGc.fillText(str1,(oC.width-m1)/2,500);		
			var str2 = '祖玛小游戏';	
			var m2 = oGc.measureText(str2).width;					
			oGc.fillText(str2,(oC.width-m2)/2,550);
			
			oGc.restore();
			
		},1000/60);

		setInterval(function(){
			var r = 200;

			for(i=0;i<bullet.length;i++){
				for(var j=0;j<ball.length;j++){
					var t = ball[j].x - bullet[i].x;
					var l = ball[j].y - bullet[i].y;
					if(t*t+l*l<=2500){
						if(ball[j].color == 0){
							Over();
						}else{
							score++;
							oP.innerHTML = score;
							ball.splice(j,1);
							bullet.splice(i,1);
							break;
						}
											
					}
					
				}
			}

			for (var i = 0; i < bullet.length; i++) {
				bullet[i].x += bullet[i].speedX;
				bullet[i].y += bullet[i].speedY;
			}

			
			for (var i = 0; i < ball.length; i++) {
				ball[i].num+=2;

				if(ball[i].num>=270){
					r=150;
					ball[i].startX = 250;
					ball[i].startY = 50;
					if(ball[i].num >= 440&&ball[i].color==0){
						ball.splice(i,1);					
					}
					if(ball[i].num == 450){
						Over();
					}
				}else{
					r = 200;
				}
				ball[i].x = r*Math.sin(ball[i].num*Math.PI/180)+ball[i].startX;
				ball[i].y = r-r*Math.cos(ball[i].num*Math.PI/180)+ball[i].startY;
				
			}

		},30)

		oC.onmousemove = function(ev){
			var ev = ev||event;
			var x = ev.clientX-oC.offsetLeft;
			var y = ev.clientY-oC.offsetTop;
			var a = x-300;
			var b = y-200;

			iR = b>0? Math.PI+Math.atan(-a/b):Math.atan(-a/b);		
		}
		oC.onclick = function(ev){
			var ev = ev||event;
			var x = ev.clientX-oC.offsetLeft;
			var y = ev.clientY-oC.offsetTop;
			var a = x-300;
			var b = y-200;
			var c = Math.sqrt(a*a+b*b);
			var speed = 20;
			
			//if(onoff){
			bullet.push({
				r:25,speedX:speed*a/c,speedY:speed*b/c,x:300,y:200
			});	
				/*onoff = false;
				setTimeout(function(){
					onoff = true;
				},50)
			}*/
							
		}

		var ball = [];
		
		setInterval(function(){
			var boom = Math.floor(Math.random()*5);
			ball.push ({x:300,y:0,r:25,startX:300,startY:0,num:0,color:boom});			
		},300)
	
	}

	function Over(){
		alert('Game Over!\n你的最终得分是:'+score +'\n点击“游戏开始”，重新开始游戏~');	
		window.location.reload();		
	}
	
}