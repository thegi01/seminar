window.onload = function(){ 
	//타입이 아니라 값이므로 출력된다.
	js.log(NaN);

	//undefined 자체는 값이지만 값이 아니므로(변수만 선언되어있는..숫자가 아니므로)
	//더하기를 하면 NaN이 된다.
	js.log(1 + undefined);

	//null을 더하면 0이므로 변환하여 더하기를 한다. (null은 값을 설정한 것이다.)
	js.log(1 + null);


}
