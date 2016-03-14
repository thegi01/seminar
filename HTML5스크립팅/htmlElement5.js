'use strict';
window.onload = function(){

	var node = document.querySelector('select');
	console.log( 'node.type : ', node.type );

	var options = node.options;
	for( var k=0; k < options.length; k++){
	    console.log( 'options[k] : ', options[k]);
	}

	var nodes = node.selectedOptions;
	for( var k = 0; k < nodes.length; k++){
	    console.log( 'nodes[k].id : ', nodes[k].id );
	}

}

