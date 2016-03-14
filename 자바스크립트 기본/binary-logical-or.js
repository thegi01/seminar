window.onload = function(){ 
	var six,
		seven = 0,
		nine = 9;

	//six
	js.log(six || seven || nine);

	//마지막까지 비교하였는데 false이면 마지막 변수 값 반환
	//false를 반화하지 않음
	js.log(seven || six);
	
	//마지막 sever 변수 값이로 0이므로 0이 출력됨
	js.log(six || seven);

	 
	var one =1;
	js.log(one ===1 || one === 3);
	js.log(one ===1 || two === 5);
	

	
}
