window.onload = function(){ 
	//값은 같지만 값 타입이 다름
	js.log(1 === '1');

	//값과 탒ㅂ 타임이 같음
	js.log(1 === 1);

	//값 타입이 다르므로 false
	var one;
	js.log(one === null);

	//값 타입이 다르므로 false
	js.log(true ===1);
	
}
