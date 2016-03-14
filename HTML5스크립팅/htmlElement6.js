'use strict';
window.onload = function(){

	var node = document.querySelector('select');
	var options = node.options;
	for(var k=0 ; k<options.length ; k++){
		js.log('index : ', options[k].index);
		js.log('text : ', options[k].text);
		js.log('defaultSelected : ', options[k].defaultSelected);
		js.log('form.nodeName : ', options[k].form.nodeName);
	}

	document.querySelector('button').onclick = function(event){
		var optionNode = new Option('추가한 것', 'add', true, true);
		node.appendChild(optionNode);
	}
	

}

