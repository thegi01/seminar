window.onload = function(){ 

	// 선언문-선언문
	var overriding1 = function(){
		js.log('선언문-선언문');
		function sports(){
			js.log('output1');
		}
		sports();
		function sports(){
			js.log('output2');
		}
	}
	//표현식 - 표현식
	var overriding2 = function(){
		js.log('표현식 - 표현식');
		var sports = function(){
			js.log('output1');
		}
		sports();
		var sports = function(){
			js.log('output2');
		}
	}
	// 선언문 - 표현식
	var overriding3 = function(){
		js.log('선언문 - 표현식');
		var sports = function(){
			js.log('output1');
		}
		sports();
		var sports = function(){
			js.log('output2');
		}
	}
	// 표현식 - 선언문
	var overriding4 = function(){
		js.log('표현식 - 선언문');
		var sports = function(){
			js.log('output1');
		}
		sports();
		function sports(){
			js.log('output2');
		}
	}
	overriding1();
	overriding2();
	overriding3();
	overriding4();
}
