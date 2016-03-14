'use strict';
window.onload = function(){

	/* 시나리오
	1. 사과 재고 수량을 조회하기 위해 '사과 이미지'를 클릭합니다.
	2. name 속성의 이름에 x, y좌표 값이 첨부되어 전송됩니다.
		- entryConfirm.html?imageName.x=12&imageName.y=34 형태
		확인용으로 표시되는 탭의 주소창 값을 확인하세요.
	3. x, y 값은 이미지 파일의 꼭지점(0,0)에서 떨어진 값입니다.
	4. method=post가 아닌 method=get이여아 합니다.
	*/

	var node = document.querySelectorAll('[type=image]')[0];
	console.log('처음 랜더링 사이즈');
	console.log('width : ', node.width);
	console.log('height : ', node.height);


	console.log('이미지 조정 사이즈');
	node.width = Number(node.width) * 1.5;
	console.log('width : ', node.width);
	console.log('height : ', node.height);

	// width가 변경되면 자동으로 height가 54로 변하게 되며
	// 1.5를 곱하면 변한 값에 곱하게 됩니다.
	// node.height = Number(node.height) * 1.5;

}

