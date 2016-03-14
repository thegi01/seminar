window.onload = function(){ 

	// 두 번째 파라미터에 초기값을 작성한 경우, 50
	var value = [10, 20, 30];
	var result = value.reduce(function(previous, current, index, list){ 
		js.log('pre : ' + previous + ', cur : ' + current);
		return previous + current;
	}, 50);
	js.log(result);
}
