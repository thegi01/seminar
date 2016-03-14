'use strict';

window.onload = function(){ 

	window.addEventListener('resize', getValResize);

	function getValResize(e){
		console.log('innerWidth : ', e.target.innerWidth);
		console.log('innerHeight :', e.target.innerHeight);
	}

	var form = document.getElementsByTagName('form')[0],
		one = document.getElementById('one'),
		two = document.getElementById('two');
		
	form.addEventListener('submit', function(e){

		if(event.preventDefault){
			event.preventDefault();
		} else {
			event.returnValue = false;
		}

		if(!one.value || !two.value) {
			console.log('값을 입력하세요');
			//return;
		} else {
			console.log(one.value);
			console.log(two.value);
		}

		two.focus();

	});


}

//addEventListener