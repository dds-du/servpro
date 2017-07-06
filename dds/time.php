<?php 

	$time = date('his');
	if(date('a')=='pm'){
		$time += 120000;
	}
	
	echo $time;
	
 ?>