'use strict';
window.onload = function(){ 
	
	var mediaList = document.getElementById('cssomID').sheet.media;
	console.log('media Text :', mediaList.mediaText);

	for(var k=0 ; k<mediaList.length ; k++){
		console.log('item(k) : ', mediaList.item(k));
	}

}

