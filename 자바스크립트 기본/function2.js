window.onload = function(){ 
	// 함수 표현식으로 변수 이름이 함수 이름이 된다.
	var myHome = function (book, video, audio) {
		return book + video + audio;
	}
	js.log(myHome('책','비디오', '오디오'));

	/* 
	변수 할당과 함수 이름을 작성한 행태
	1. inside 이름으로 function 인스턴스를 생성하고 outside에 할당한다.
	2. 함수 밖에서 inside() 함수를 호출하면 에러가 밠생하므로
		- outside() 를 호출하여 안으로 이동한 후 호출
	3. 함수 안에서 inside() 함수를 호출하는 것은 자신을 호출하는 것이며
		- 무한으로 호출하게 되므로 함수가 종료되도록 조치를 취해야 한다.
		- 자신을 호출하는 행태를 재귀 함수라고 한다.
	4. 변수 할당과 함수 이름을 같이 사용하는 것은 좋은 형태가 아니며
		- 재귀 함수 호출은 다른 방법으로 할 수 있다.
	*/
	var outside = function inside(param) {
		if(param === 102) {
			return param;
		}
		js.log(param);
		return inside(param + 1);
	};
	js.log(outside(100));
}
