window.onload = function(){ 
	// 자바스크립트 프로그램 형태
	/*
	1. 인스턴스를 생성하지 않고
	- 인스턴스 위치에 연결할 데이터를 작성한다.
	2. 그러면 엔진이 데이터 타입에 따라 오브젝트를 결정하고
	- 오브젝트에 속한 함수를 호출한다.
	3. 'sports'를 작성했으므로 String 오브젝트의 concat() 호출된다.
	*/
	var result = 'sports'.concat('soccer', 11);
	js.log(result);
	js.log(typeof result);

	// ['sports', 'sports']를 작성했으므로
	// Array오브젝트의 concat()이 호출된다.
	result = ['sports', 'sports'].concat(11);
	js.log(result);

	js.log(Array.isArray(result));


}
