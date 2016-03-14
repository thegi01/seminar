'use strict';

window.onload = function(){
	var clickNode = document.getElementById("clickNode");
	var baseNode = document.getElementById('baseNode');
	clickNode.addEventListener('click', function(){
		// #baseNode에 차이드를 추가합니다.
		var content = '<div id=one>추가1</div><div id=two>추가2</div>';
		baseNode.insertAdjacentHTML('beforeend', content);
	}, false);
	var obj = new MutationObserver(callback);
	// 차일드 노드의 추가, 삭제를 모티너링하도록 옵션 설정
	var options = {childList : true};
	// 관찰 시작
	obj.observe(baseNode, options);
	function callback(records){
		records.forEach(function(record){
			var addedNodes = record.addedNodes;
			for(var k=0 ; k<addedNodes.length ; k++){
				js.log('id : ', addedNodes[k].id, ',', addedNodes[k].textContent);
			}
		});
	}

}
