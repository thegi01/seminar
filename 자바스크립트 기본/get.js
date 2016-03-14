window.onload = function(){ 

	var obj = {};
	Object.defineProperty(obj, "book", {
		get : function(){
			return '책';
		}
	});

	result = obj.book;
	js.log(result);


}
