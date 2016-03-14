'use strict';
window.onload = function(){ 
	var radioList, formNode = document.forms[0];
	js.log('length : ', formNode.length);

	// IE9 이싱만 지원, 4대 브라우저 지원하지 않음
	if(formNode.namedItem){
		radioList = formNode.namedItem('sports');
		js.log('nodeList.length : ', radioList.length);
		js.log('value : ', radioList.value);
	} else {
		js.log('namedItem() 을 지원하지 않음');
	}
	// namedItem()과 같이 사용할 수 있으며 다수가 매치되면 다수를 반환합니다.
	// <input type=radio> 이면 RadioNodeList 인터페이스 형태로 반환합니다.
	radioList = formNode['sports'];
	js.log('nodeList.length : ', radioList.length);

	// 크롬, 파이어폭스, 오페라 체크된 엘리먼트의 value 속성값을 반환
	// IE, 사파리 : undefined 반환
	js.log('radioList.value : ', radioList.value);

	radioList.value = '값 변경';
	js.log('radioList.value 값 변경 : ', radioList.value);

}

