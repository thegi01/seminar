window.onload = function(){ 

	// 배열의 엘리먼트 값이 25보다 작은 엘리먼트를 배열로 묶어 반환한다.
	var result = [10, 20, 30, 40].filter(function(element, index, list){ 
		return element < 25;
	});
	js.log(result);
}
