'use strict';
window.onload = function(){ 
	
	var openTitle = document.title;
	var pageIndex = 0;
	// "서버에서 데이터 수신" 버튼을 클릭할 때마다 실행
	document.querySelector('button').onclick = function(e){
		pageIndex++;
		var eventPass = {
			page : pageIndex,
			value : 'value' + pageIndex
		}
		document.title = '페이지' + pageIndex;
		window.history.pushState(eventPass, document.title, "?page=" + pageIndex);
		console.log('page count : ', pageIndex);
	}
	// "이전/다음" 버튼을 누를 때마다 실행
	window.onpopstate = function(e){
		if(e.state){ // eventPass
			document.title = '페이지 '+ e.state.page;
		} else {
			document.title = openTitle;
			console.log('state : ', openTitle);
		}
	}
	
}

