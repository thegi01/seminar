window.onload = function(){ 
	//typeof 연산자가 배열을 object로 반환하므로 배열 여부 인식 불가
	js.log(typeof[1, 2]);

	//
	js.log(Array.isArray([1,2]));

	//falback 함수
	//힘수가 없을 때 대신 호출되는 함수를 의미

	// 현재 환경은 ES5를 지원하므로 Array.isArray가 존재한다.
	// 따라서 존재하는 것으로 체크해야 함수 코드가 대체된다.
	if(!Array.isArray) {
		Array.isArray = function (args) {
			return Object.prototype.toString.call(args) == '[object Array]';
		};
	}
	js.log(Array.isArray([1,2]));
}
