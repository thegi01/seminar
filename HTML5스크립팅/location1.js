'use strict';
window.onload = function(){ 
	
	console.log(window.location);
	console.log('typeof : ', typeof window.location);
	console.log('Location 오브젝트 프로퍼티');
	var doc = document.location;
	console.log('href : ',  doc.href);
	console.log('hostname : ',  doc.hostname);
	console.log('host : ',  doc.host);
	console.log('hash : ',  doc.hash);
	console.log('port : ',  doc.port);
	console.log('origin : ',  doc.origin);
	console.log('protocol : ',  doc.protocol);
	console.log('search : ',  doc.search);
	// "url 변경" 버튼을 클릭하면 실행되며 지정한 url로 이동
	document.querySelector('button').onclick = function(e){
		window.location = 'http://www.corechain.com/lec/html5/load_23_url.html'
	}

}

