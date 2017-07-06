//JavaScript

$(function(){

	var dat = {};
	var $tab = $('#tab');
	var page = 15,startP = 0,overP=page;
	$.ajax({
		url:'data.php',
		type:'POST',
		data:{'index':'userinfo'},
		dataType:'json',
		async:false,
		success:function(data){
			dat = data;
		},
		error:function(){
			alert('只有管理员可以打开本页');
			window.close();
		}
	});
	//console.log(dat);
	var len =dat.length;

	var pageNum = Math.ceil(len/page);
	
	for(var i=0;i<pageNum;i++){
		$('<li>').html(i+1).appendTo($('.page'));
	}
	$('.page').find('li').eq(0).addClass('active');
	$('.page').find('li').click(function(){
		var index = $(this).index();

		$(this).addClass('active').siblings().removeClass('active');
		startP = index*page;
		overP = startP+page;
		//overP = overP>len?len:overP;
		//alert(overP);
		showData();
	});
	
	showData();

	function showData(){
		overP = overP>len?len:overP;
		$tab.find('tr').not('.tab_head').remove();
		for(var i=startP;i<overP;i++){
			var $tr = $('<tr>');
			for(var attr in dat[i]){
				var $td = $('<td>').html(dat[i][attr]).appendTo($tr);
			}
			var $td = $('<td>').html('<a class="btn_del" index='+ dat[i]['i_id'] +' href="javascript:;">删除</a>').appendTo($tr);
			$tr.appendTo($tab);
		}
		$('.btn_del').click(del);
	}
	
	function del(){
		var id = $(this).attr('index');
		var _this = $(this);

		if(confirm('你确定要删除该数据吗，删除后无法恢复！')){
			$.ajax({
				url:'data.php',
				type:'POST',
				data:{'index':'del','id':id},
				async:false,
				success:function(data){
					alert('删除成功');
					_this.parent().parent().remove();
				},error(data){
					alert('删除失败');
				}
			});
		}		
		
	}

	$('#del_all').click(function(){
		if(confirm('你确定要删除所有数据吗，删除后无法恢复，请谨慎操作！！！')){
			$.ajax({
				url:'data.php',
				type:'POST',
				data:{'index':'del','id':'all'},
				async:false,
				success:function(data){
					alert('删除成功');
					$tab.find('tr').not('.tab_head').remove();
					$('.page_wrap').remove();
				},error(data){
					alert('删除失败');
				}
			});
		}	
	})
});