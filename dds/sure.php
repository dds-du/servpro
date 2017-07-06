<?php

	header('Content-Type:image/png');
	session_start();

	$width = 80;
	$height = 24;
	$sure = '';
	for($i=0;$i<4;$i++){
		$sure.= dechex(mt_rand(0,15));
	}
	$_SESSION['sure'] = $sure;
	$m = imagecreatetruecolor($width, $height);

	$ran_color = imagecolorallocate($m, mt_rand(0,100), mt_rand(0,100), mt_rand(0,100));
	$white = imagecolorallocate($m,255,255,255);
	imagefill($m, 0, 0, $white);

	$font = 'C:\Windows\Fonts\simhei.ttf';
	for($i=0;$i<4;$i++){
		imagettftext($m, 16, mt_rand(-10,10), 20*$i+mt_rand(0,10), mt_rand(15,18), $ran_color, $font, $sure[$i]);
	}
	

	imagepng($m);
	imagedestroy($m);

?>
