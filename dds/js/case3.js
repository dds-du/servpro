//JavaScript
$(function(){//导航栏
	var selH = 38;
	var $a = $('.nav_a');
	var $sel = $('.sel');


	$a.hover(function(){
		var _this = $(this).siblings();

		$(this).css('border_bottom','1px solid #6b6868');
		_this.height(selH*_this.children('div').length);
	},function(){
		var _this = $(this).siblings();

		$(this).css('border_bottom','');
		$(this).siblings()[0].timer=setTimeout(function(){
			_this.height(0);
		},200);		
	});

	$sel.hover(function(){	
		clearTimeout($(this)[0].timer);
	},function(){
		$(this).height(0);
	})
	
});
$(function(){//banner栏
	var $ul = $('#banner .tab');
	var $li = $ul.find('li');
	var $pic = $('#banner .pic_tab');
	var tabLi = $('#banner .pic_tab').find('li');
	var src = ['img/case3/bg1.jpg','img/case3/bg2.jpg','img/case3/bg3.jpg'];
	var timer = null;
	var now = 0;
	
	$pic.width(1920*2);

	$ul.delegate('li','click',function(){
		if(now != $(this).index()){
			var nSrc = src[$(this).index()];
			
			$(this).addClass('active').siblings().removeClass('active');
			$pic.offset({left:$pic.offset().left - 1920});
			tabLi[1].children[0].src = src[now];	
			tabLi[0].children[0].src = nSrc;
			now = $(this).index();
			$pic.animate({left:0},600,'linear');
		}
	});

	timer = setInterval(change,3000);

	$('#banner').hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(change,3000);
	});

	function  change(){
		
		$pic.offset({left:$pic.offset().left - 1920});
		tabLi[1].children[0].src = src[now];
		now++;
		now%=3;
		
		$li.eq(now).addClass('active').siblings().removeClass('active');
		tabLi[0].children[0].src = src[now];
		$pic.animate({left:0},600,'linear');
	}
});
$(function(){//新闻和查看栏的遮罩层
	var $newsL = $('.news_left');
	var $mask = $newsL.find('.news_mask');
	var $box = $('.box');

	$newsL.hover(function(){
		$mask.stop().show(300);
	},function(){
		$mask.stop().hide(300);
	});

	$box.delegate('.box_pic','mouseover',function(){
		$(this).children('.mask').css({width:'100%',height:'100%',left:0,top:0});
	});
	$box.delegate('.box_pic','mouseout',function(){
		$(this).children('.mask').css({width:0,height:0,left:'50%',top:'50%'});
	});
});
$(function(){//图片切换
	var $pic1 = $('.eng_pic1');
	var $li1 = $pic1.find('li');
	var $pic2 = $('.eng_pic2');
	var $li2 = $pic2.find('li');
	var $wrap = $('.eng_tab_wrap');
	var oWrap = $wrap[0];
	var $prev = $('.prev');
	var $next = $('.next');
	var $tab = $('.eng_tab').find('li');
	var liW = 390;
	var oUl = $pic1[0];
	var now = 0;

	init();
	function init(){//页面初始化
		$wrap.width(liW*$li1.length+liW*$li2.length);
		$wrap.css({left:-liW+'px'});
	}

	$tab.eq(0).click(function(){//切换点击
		$(this).attr('class','active').siblings().attr('class','');
		$wrap.stop().animate({left:-liW+'px'});
		oUl = $pic1[0];
		now = 0;
	});
	$tab.eq(1).click(function(){
		$(this).attr('class','active').siblings().attr('class','');
		$wrap.stop().animate({left:-liW*$li1.length-liW+'px'});
		oUl = $pic2[0];
		now = 1;
	});

	$prev.click(function(){//上一张
		var _this = $(this);
		var aLi = oUl.getElementsByTagName('li');
		var left = 0;
		
		_this.attr('disabled','true');	
		oUl.insertBefore(aLi[aLi.length-1],aLi[0]);
		oWrap.style.left = oWrap.offsetLeft - liW+'px';
		if(now == 0){
			left = -liW;	
		}
		if(now == 1){
			left = -liW*$li1.length-liW;	
		}
		$wrap.animate({left:left},300,'linear',function(){
			_this.removeAttr('disabled');
		});
					
	});

	$next.click(function(){//下一张
		var _this = $(this);
		var aLi = oUl.getElementsByTagName('li');
		
		_this.attr('disabled','true');		
		oUl.appendChild(aLi[0]);
		oWrap.style.left = oWrap.offsetLeft + liW+'px';

		if(now == 0){
			left = -liW;	
		}
		if(now == 1){
			left = -liW*$li1.length-liW;	
		}
		$wrap.animate({left:left},300,'linear',function(){
			_this.removeAttr('disabled');
		});
		
	});

})