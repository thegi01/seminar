window.onload = function(){ 

	// 배열 엘리먼트 값에 7을 곱해 반환하면
	// 반환한 값을 새로운 배열에 설정하여 반환한다.
	var result = [10, 20, 30].map(function(element, index, list){ 
		return element * 7;
	});
	js.log(result);
}
