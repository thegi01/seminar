window.onload = function(){ 

	// 두 번째 파라미터
	var result = JSON.stringify({sports : 'sports', player : 55},
		function(key, value) {
			return key === 'player' ? 11 : value;
		}
	);
	js.log(result);

	// 두 번째 파라미터에 배열을 작성한 형태
	// 배열에 프로퍼티 이름을 작성하지 않으면 변환에서 제외시킨다.
	// 그래서 player : 11 이 문자열로 변환되지 않는다.
	js.log(JSON.stringify({sports : 'soccer', player : 11, time : 90}, ['sports', 'time']));

}
