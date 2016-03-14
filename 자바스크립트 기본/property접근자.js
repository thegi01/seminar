window.onload = function(){ 
	//오브젝트 초기화
	var obj = {book:"책", sky: "하늘"};

	//점(.) 다음에 프로퍼티 이름을 지정하여 악세스
	//book  프로퍼티 값 반환
	js.log(obj.book);

	//대괄호[]안에 문자열로 이름을 지정하여 악세스
	js.log(obj["sky"]);

	//대괄호에 변수 이름을 작성하여 악세스
	var name = "book";
	js.log(obj[name]);

	//프로퍼티 이름가 값 추가
	obj.add = "추가";
	js.log(obj.add);

	//오브젝트 추가하고 점으로 계층을 지정하여 악세스
	obj.sports = {item: "축구"};
	js.log(obj.sports.item);
}
