window.onload = function(){ 
	//\r 은 줄 분리자
	console.log(JSON.stringify({sports : 'sports', player : 55}, '', '\r'));
	// 들여쓰기
	console.log(JSON.stringify({sports : 'sports', player : 55}, '', 4));
	// 문자열 삽입
	console.log(JSON.stringify({sports : 'sports', player : 55}, '', "##"));



}
