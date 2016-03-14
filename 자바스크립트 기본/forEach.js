window.onload = function(){ 
	/*
	for()와 forEach()의 차이점을 기술하세요.
	차이가 나는 상황에 대한 for()와 forEach() 코드를 작성하고
	차이 근거를 기술하세요.
	단점에 대해 가능하다면 대안을 제시하세요.
	차이점 사례
	forEach()는 반복 시작 인덱스를 지정할 수 없다.
	for(var k=2; k<5 ; k++){}
	[1, 2, 3].forEach(function(){…})
	*/

	var arr = [0, 1, 2, 3, 4];

	console.log('[for]');
	console.log('시작과 종료 index를 지정할 수 있다.')
	for(var k=2; k<4 ; k++){
		console.log('index : ' + k + ', value : ' + arr[k]);
	}

	console.log('');

	console.log('[forEach]');
	console.log('시작과 종료 index 제어 추가');
	arr.forEach(function(element, index, list){
		if( 1 < index && index < 4) {
			console.log('index : ' + index + ', value : ' + element);
		} 
	});
}
