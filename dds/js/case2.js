//JavaScript

$(function(){//侧边栏
	$sec = $('#section');
	$div = $sec.find('div');
	var aT = [0];
	aT.push($('.food').offset().top);
	aT.push($('.hotel').offset().top);
	aT.push($('.travel').offset().top);
	aT.push($('.shop').offset().top);
	aT.push($('.fun').offset().top);

	$div.click(function(){
		var index = $(this).index();
		$('body,html').animate({'scrollTop':aT[index]},600);
		//$(window).scrollTop(aT[index]);
	})
});
$(function(){//banner
	var $ul = $('#banner .tab');
	var $li = $ul.find('li');
	var now = 0;
	var $pic = $('#banner .pic_tab');
	var tabLi = $('#banner .pic_tab').find('li');
	var $bot = $('.wrap_bottom');
	var timer = null;
	
	$pic.width(1920*2);
	$ul.delegate('li','click',function(){
		if(now != $(this).index()){
			var src = $(this)[0].dataset.src;
			$bot.animate({height:0});
			$ul.animate({bottom:-20});
			$(this).attr('class','active').siblings().attr('class','');
			$pic.offset({left:$pic.offset().left - 1920});
			tabLi[1].children[0].src = $li[now].dataset.src;	
			tabLi[0].children[0].src = src;
			now = $(this).index();
			$pic.animate({left:0},600,'linear',function(){
				$bot.animate({height:55});
				$ul.animate({bottom:20});
			});
		}
	});

	timer = setInterval(function(){
		$bot.animate({height:0});
		$ul.animate({bottom:-20});
		tabLi[1].children[0].src = $li[now].dataset.src;
		if(now == $li.length-1){
			now = 0;
		}else{
			now++;
		}
		tabLi[0].children[0].src = $li[now].dataset.src;
		$pic.offset({left:$pic.offset().left - 1920});
		$li.eq(now).attr('class','active').siblings().attr('class','');
		$pic.animate({left:0},600,'linear',function(){
			$bot.animate({height:55});
			$ul.animate({bottom:20});
		});
	},2000);

	$('#banner').hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(function(){
			$bot.animate({height:0});
			$ul.animate({bottom:-20});
			tabLi[1].children[0].src = $li[now].dataset.src;
			if(now == $li.length-1){
				now = 0;
			}else{
				now++;
			}
			tabLi[0].children[0].src = $li[now].dataset.src;
			$pic.offset({left:$pic.offset().left - 1920});
			$li.eq(now).attr('class','active').siblings().attr('class','');
			$pic.animate({left:0},600,'linear',function(){
				$bot.animate({height:55});
				$ul.animate({bottom:20});
			});
		},2000);
	});
});