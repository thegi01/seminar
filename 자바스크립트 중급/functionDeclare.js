window.onload = function(){ 
	/*function myHone(book, video, audio){
		return book + video + audio;
	}
	js.log(myHone('책', '비디오', '오디오'))*/
	 var myHone = function(book, video, audio){
		return book + video + audio;
	}
	js.log(myHone('책', '비디오', '오디오'));

	var outside = function inside(param){
		if(param === 102){
			return param;
		}
		js.log(param);
		return inside(param + 1);
	};
	js.log(outside(100));
}
