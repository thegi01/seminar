window.onload = function(){ 
	var one = 1,
		zero = 0;

	//one 변수 값이 1이므로 true가 되어 오른쪽 값을 체크
	// zero 변수 값이 0이므로 false가 되며  zero 변수 값을 반환
	//empty와 nine을 체크도 하지 않으며 체크를 하면 에러 발생 
	js.log(one && zero && empty && nine);

	var two, six = 6;

	//two 변수값이 undefined 이므로 false되어 two 변수 값을 반환
	//six 변수 값은 체크도 하지 않는다.
	js.log(two && six);

	// six 변수 값이 6이므로 오른쪽에 체크하게 되며
	// one 변수 값이 1이므로 모두 true가 된다.
	// 이 때 마지막의 one 변수 값을 반환한다.
	js.log(six && one);

	/*-----------------*/

	var one =1, two=2;

	js.log(one ===1 && two === 3);

	js.log(one ===3 && five === 5);

	/* five 변수가 아래에 작성되어 있으므로
	이 위치에서 five 변수가 존재하지 않는 것을 볼 수 있다.
	그런데 five변수 값이 undefined로 출력된 것은
	변수가 선언되어 있는 것을 의마한다.
	five변수가 존재하지 않으면 에러가 발생한다.
	이 논리에 대해서는 중급과정에 다룹니다.
	*/
	// 자바스크립트 실행 순서
	// 1차 : function
	// 2차 : 변수 선언
	// 3차 : 실행 
	js.log(five); //undefined

	var five = 5;
	js.log(one === 1 && five === 5);

}
