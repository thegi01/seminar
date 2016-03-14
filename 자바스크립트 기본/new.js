window.onload = function(){ 
	//브라우저 디버깅 창에서
	//생성한 obj애 'baseball'의 존재를 확인한다.
	var obj = new String('baseball');
	debugger;

	new Sports = function(){};
	Sports.prototype.getItem = function(){
		return 'baseball';
	}
	
	// 생성한 오브젝트에 getItem 메소드 존재를 확인한다.
	var sportsObj = new Sports();
	var dummy;

}
