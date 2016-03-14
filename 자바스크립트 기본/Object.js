window.onload = function(){ 
	var sports = {player:11, item:'국가'};

	//key 프로퍼티에 접근하여 값을 변환받음
	js.log(sports.player);

	js.log(sports['player']);

	//key 프로퍼티에 접근하여 값을 설정
	sports.player = 22;
	js.log(sports.player);



}
