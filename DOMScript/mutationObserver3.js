'use strict';

window.onload = function(){
	var clickNode = document.getElementById("clickNode"),
		baseNode = document.getElementById('baseNode'),
		options = {childList:true, subtree:true, characterData:true, characterDataOldValue:true},
		obj = new MutationObserver(callback);
	clickNode.addEventListener('click', function(){
		document.getElementById('id1').textContent = '텍스트 변경';
	}, false);

	obj.observe(baseNode, options);

	function callback(records){
		records.forEach(function(record){
			for(var k=0 ; k<record.removedNodes.length ; k++){
				js.log('삭제 : ', record.removedNodes[k].textContent);
			};
			for(var k=0 ; k<record.addedNodes.length ; k++){
				js.log('추가 : ', record.addedNodes[k].textContent);
			};
		});
	}

}
