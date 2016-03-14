'use strict';
window.onload = function(){ 

	var el = document.getElementById('sports');
	for(var k=0 ; k<el.attributes.length ; k++){
		js.log('attributes : ', el.attributes[k].name);
	}
	// item() 파라미터에 지정한 인덱스 번째의 속성 노드 변환
	// 순서가 불규칙하므로 항상 같은 속성 노드가 반환되지 않습니다.
	js.log('item(0) : ', el.attributes.item(0).name);
	// getNamedItem() 파라미터에 지정한 속성 노드 반환
	js.log('getNamedItem(id) : ', el.attributes.getNamedItem("id").value);

	// 속성 노드 새성 및 속성 노드 추가
	var classAttr = document.createAttribute('class');
	classAttr.value = 'sportsClass';
	el.attributes.setNamedItem(classAttr);
	js.log("getNamedItem(class) : ", el.attributes.getNamedItem("class").value);
	// 바로 위의 setNaemdItem() 체크를 위해 의도적으로 주석 처리
	// el.attributes.removeNamedItem("class");
}