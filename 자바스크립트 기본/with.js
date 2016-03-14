window.onload = function(){ 
	//strict 모드 선언
	//'use strict';

	var sports = {soccer : {player:'11명', time:'90분'} };
	with(sports) {
		with(soccer){
			js.log(player);
			js.log(time);
		}
	}
}
