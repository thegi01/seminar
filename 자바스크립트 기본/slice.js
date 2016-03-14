window.onload = function(){ 
	var value = [1, 2, 3, 4, 5, 6, 7];

	//1부터 3직전까지
	js.log(value.slice(1,3));

	// 0부터 3직전까지
	js.log(value.slice(false, 3));

	//4부터 끝까지 
	js.log(value.slice(4));

	//첫 번째 파라미터 값이 두번째 보다 크면 배열 반환
	js.log(value.slice(4,3)); 

	//파라미터 값이 음수이면 length 값을 더해 사용
	//length가 7이므로 (3,5)
	js.log(value.slice(-4, -2));

	//파라미터 값이 음수이므로 length값을 더하면 (5, 3)
	//첫 번째 파라미터 값이 두번째보다 크면 빈 배열 반환
	js.log(value.slice(-2, -4));
}
