'use strict';

window.onload = function(){

	// typeSelector
	var nodes = document.querySelectorAll('p');
	//var nodes = document.querySeletor('p');
	js.log(nodes);

	/*// Universal Selector
	var nodes = document.querySelectorAll('*');
	for(var k=0; k<nodes.length ; k++){
		if(k<10){
			js.log(nodes[k].nodeName);
		}
	}*/

	/*// ID Selector
	var nodes = document.querySelectorAll('#sportsDiv, #memberSpan');
	js.log(nodes);*/
/*
	// Class Selector
	var nodes = document.querySelectorAll('.sportsClass, .soccerClass');
	js.log(nodes);
	var nodes = document.querySelectorAll('span.sportsClass');
	js.log(nodes);
	*/
	
	/*
	// Combinator
	console.log(document.querySelectorAll('div p'))
	console.log(document.querySelectorAll('div > p'))
	console.log(document.querySelectorAll('p + div'))
	*/
}
//addEventListener