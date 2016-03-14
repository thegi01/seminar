window.onload = function(){ 
	var obj = new Function('book', 'title', "return book + ' : ' + title;");
	js.log(obj('책', '자바스크립트'));

	obj = new Function('return 1 + 2');
	js.log(obj);

}
