window.onload = function(){ 
	var value = [20, 10, 30];

	// 10이 15보다 작으므로 false를 반환하게 된다.
	// false를 반환하면 반복을 종료하므로 30이 출력되지 않는다.
	var result = value.every(function(element, index, list){ // 설명 추가 : 요즘 권장하는 코딩 방식
		js.log('value : ' + element);
		return element > 15;
	});

	// 콜백 함수에서 한 번이라도 false를 반환하면 result에 false가 설정된다.
	// 이 값으로 반복 중간에 콜백 함수가 종료된 것을 체크할 수 있다.
	js.log(result);
}
