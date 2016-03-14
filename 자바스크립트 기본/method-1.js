window.onload = function(){ 
	//객체 지향 프로그램의 전형적인 형태
	var obj, result;

	//String 인스턴스 생성
	obj = new String();
	//생성한 String 인스턴스의 condat() 호출
	//파라미터로 연결할 데이터를 넘겨준다.
	//concat() 메소드가 종료되면 연결한 값을 반환한다.
	result = obj.concat('sports', 'soccer', 11);
	js.log(result);


	//Array 인스턴스 생성
	obj = new Array();
	//Array 인스터스의 concat() 호출
	result = obj.concat('sports', 'soccer', 11);
	js.log(result);

	for(var k=0; k<result.length ; k++){
		js.log(result[k]);
	}


	

}
