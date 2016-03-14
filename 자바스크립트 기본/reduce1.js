window.onload = function(){ 

	// 두 번째 파라미터를 작성하지 않은 경우
	var value = [10, 20, 30, 40];
	var result = value.reduce(function(previous, current, index, list){ 
		js.log('pre : ' + previous + ', cur : ' + current);
		return previous + current;
	});
	js.log(result);
}
