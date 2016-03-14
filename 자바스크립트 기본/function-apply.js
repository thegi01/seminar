window.onload = function(){ 

	// arguments 배열 형태의 오브젝트
	// 호출받는 함수에 파라미터 작성과 관계없이
	// 호출한 함수에서 넘겨준 파라미터 값이 순서대로 설정된다.
	function getTotal(){
		var total = 0;
		for(var k=0 ; k<arguments.length ; k++){
			total += arguments[k];
		}
		return total;
	};
	// 배열로 파라미터로 넘겨 준다.
	js.log(getTotal.apply(this, [10, 20, 30]));

}
