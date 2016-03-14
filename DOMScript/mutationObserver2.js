'use strict';

window.onload = function(){
	var clickNode = document.getElementById("clickNode"),
		baseNode = document.getElementById('baseNode'),
		options = {childList:true, subtree:true, removeNodes:true},
		obj = new MutationObserver(callback);
	clickNode.addEventListener('click', function(){
		var node = document.getElementById('id11');
		node.parentNode.removeChild(node);
	}, false);
	obj.observe(baseNode, options);

	function callback(records){
		records.forEach(function(record){
			js.log('type : ', record.type);
			js.log('target : ', record.target.id);
			var nodes = record.removedNodes;
			for(var k=0 ; k<nodes.length ; k++){
				js.log('id : ', nodes[k].id, ' , ', nodes[k].textContent);
			}
		});
	}

}
