'use strict';
window.onload = function(){ 
	
	var scopeObj = {
		value : 100,
		get : function(param){
			this.value = this.value + param + 5;
			js.log('setTimeout ', this.value);
			window.clearTimeout(window.timerID);
		}
	}
	document.getElementById('scope').onclick = function(){
		window.timerID = delay(scopeObj.get, scopeObj, 1000, 20);
	}
	// 핸들러, 스코프, delaytime 순서로 작성
	// 파라미터에 제한을 두지 않기 위해 arguments 사용
	function delay(fn, scope, time){
		var params = Array.prototype.slice.call(arguments, 3);
		return setTimeout(function(){
			return fn.apply(scope || window, params);
		}, time || 1000);
	};


	/* call, apply, bind */

	// call
	var get = function(value){
		return this.base * this.rate + value;
	}
	var result = get.call({base:20, rate:30}, 50);
	console.log(result);

	// apply :  파라미터를 배열로 넘겨준다.
	// bind와 this

}

