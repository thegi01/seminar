window.onload = function(){ 
	//브라우저 디버킹 창에서 생허나 obj 형태를 살펴본다.

	//
	var obj = new Object();
	js.log(obj);

	obj = new Object(12345);
	js.log(obj); //[[primitiveValue]]

	obj = new Object('abddg');
	js.log(obj); //[[primitiveValue]]
}
