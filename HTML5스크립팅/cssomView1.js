'use strict';
window.onload = function(){ 

	// 브라우저 크기를 줄이거나 늘렸을 때
	// 미디어 쿠리에 일치하게 되거나, 일치하지 않게 되면
	// addListener() 파라미터에 지정한 리스너가 호출된다.
	// MediaQueryList 오브젝트 생성. "(orientation:portrait"
	var matchObj = window.matchMedia('(max-width:600px)');
	// 매치 상태, 미디어 쿼리 출력
	js.log('matches : ', matchObj.matches);
	js.log('media : ', matchObj.media);

	// 이벤트 리스터 설정, 해제(테스트를 위해 주석으로 처리)
	matchObj.addListener(changeMedia);
	//matchObj.removeListener(changeMedia);

	// 파라미터에 MediaQueryListEvent가 설정됨
	function changeMedia(eventObj){
		js.log('--------');
		js.log('matches : ', eventObj.matches);
		eventObj.matches? js.log('일치 발생') : js.log('불일치 발생');
	}

}

