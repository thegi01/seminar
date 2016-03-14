'use strict';
window.onload = function(){ 
	
	var get = function(id){
		return document.getElementById(id);
	}
	console.log(get("getId"));

	var selector = function(pattern, all){
		if(all) {
			return document.querySelectorAll(pattern);
		} else {
			return document.querySelector(pattern);
		}
	}
	console.log(selector('input'));

}

