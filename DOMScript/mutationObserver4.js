'use strict';

window.onload = function(){
	var clickNode = document.getElementById("clickNode"),
		baseNode = document.getElementById('baseNode'),
		options = {childList:true, subtree:true, attributes:true, attributeOldValue:true, attributeFilter:['id']},
		obj = new MutationObserver(callback);
	clickNode.addEventListener('click', function(){
		document.getElementById('id1').id = 'changedID';
		/*callback(obj.takeRecords());
		obj.disconnect();*/
	}, false);

	obj.observe(baseNode, options);

	function callback(records){
		debugger;
		records.forEach(function(record){
			js.log('type : ', record.type);
			js.log('oldValue : ', record.oldValue);
			js.log('atrributeName : ', record.attributeName);
		});
	}

}
