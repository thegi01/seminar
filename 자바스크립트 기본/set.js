window.onload = function(){ 

	var bookValue, obj = {};
	Object.defineProperty(obj, "book", {
		get : function(){
			return bookValue;
		},
		set : function(param){
			bookValue = param;
		}
	});
	obj.book = 123;
	result = obj.book;
	js.log(result);


}
