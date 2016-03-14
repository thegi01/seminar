'use strict';
window.onload = function(){ 
	
	var scopeObj = {
		value : 1,
		sum : 0,
		get : function(){
			if(this.value>20) return;
			this.sum += this.value;
			this.value++;
			if(this.value == 20)  js.log('value : ', this.value, ', sum :', this.sum);
		}
	}

	document.getElementById('scope').onclick = function(){
		window.timerID = intervalFn(scopeObj.get, scopeObj, 100);
	}
	// 처음 시작 시간이 걸리므로 먼저 호출한 후 타이머를 걸기도 한다.
	function intervalFn(fn, scope, interval){
		var params = Array.prototype.slice.call(arguments, 3);
		return setInterval(function(){
			return fn.apply(scope || window, params);
		}, interval || 1000);
	};

	document.getElementById('clear').onclick = function(){
		window.clearInterval(timerID);
		js.log('clearInterval');
	}


}

