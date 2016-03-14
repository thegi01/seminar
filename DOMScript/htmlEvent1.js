'use strict';

// 이벤트가 발생한 순서를 체크하기 위한 것이므로
// window.onload = function() 안에 작성하지 않습니다.
var contentLoaded = false;
document.addEventListener('DOMContentLoaded', function(event){
	// <body>가 로드되었으므로 js.log()를 사용할 수 있습니다.
	js.log("DOM 파싱 완료");
	contentLoaded = true;
});
window.onload = function(event){
	js.log('event.type : ', event.type);
	js.log('DOMContentLoaded : ', contentLoaded);
}

/*
1. DOMContentLoaded 이벤트
	- DOM이 로드되고 파싱되었을 때 발생
	- 전체 DOM 트리가 로드되었을 때
	- 프레임 워크가 보통 여기에 걸림
	- DOMContentLoaded 끝나면 자바스크립트 실행
	- header에 자바스크립트 코드를 사용
2. window.onload 이벤트
	- <img>의 image를 가져온 후에 발생
	- 끝난 후 할려면 js 파일을 가장 아래에 둔다.
ie8이하는 다른 방식으로 사용, jquery는 있음
*/
