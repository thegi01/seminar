window.onload = function(){ 
	var sports = {
		soccer : {member : 11, time : 90},
		baseball : {member : 5, time : 49}
	};
	function showValue(sports){
		var type, obj, name;
		for(type in sports){
			obj = sports[type];
			typeof obj === 'object' ? showValue(obj) : console.log(type + ' : ' + obj);
		}
	}
	showValue(sports);
}

