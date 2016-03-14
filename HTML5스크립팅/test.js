'use strict';

var inherit = function(p){					
	if (p == null) throw TypeError();		// p는 null이 아닌 객체여아 한다.
	if(Object.create)				// 만약 Object.create()를 사용할 수 있으므로
		return Object.create(p);		// 이를 사용한다.
	var t = typeof p;				// 만일 객체의 타입검사가 좀 더 필요한 경우 아래와 같이 하자.
	if(t !== "object" && t !== "function") throw TypeError();
	var f = function(){};			// 임시로 빈 생성자 함수를 정의한다.
	f.prototype = p;				// f의 프로토타입 프로퍼티를 p로 설정한다.
	return new f();				// 함수 f()를 사용한다.
}

window.onload = function(){ 

var p = {

}
	
}





