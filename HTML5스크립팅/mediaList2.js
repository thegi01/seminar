'use strict';
window.onload = function(){ 
	
	var mediaList = document.getElementById('cssomID').sheet.media;
	console.log('media Text :', mediaList.mediaText);

	// media 삭제
	mediaList.deleteMedium('print');
	for(var k=0 ; k<mediaList.length ; k++){
		console.log('삭제 후 item(k) : ', mediaList.item(k));
	}

	mediaList.appendMedium('projection and (color)');
	for(var k=0 ; k<mediaList.length ; k++){
		console.log('추가 후 item(k) : ', mediaList.item(k));
	}
}

