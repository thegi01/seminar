window.onload = function(){ 
	function getTotal(one, two){
		return one + two;
	};
	// 첫 번째 파라미터는 호출된 함수의 파라미터로 넘어가지 않음
	js.log(getTotal.call(this, 10, 20));


}
