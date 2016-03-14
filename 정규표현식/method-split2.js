'use strict';
window.onload = function(){ 

var result = '12_34_56'.split('');
js.log(result);
result = '_12_34'.split('_'); // _에 문자가 없으면 _ 앞에 빈 문자열이 설정됩니다. ie old, crome과 차이가 있다.
js.log(result);
result = '12_34_78'.split('78'); // 분리한 문자 뒤에 문자가 없으면 빈 문자열이 설정된다.
js.log(result);
result = '12A34A56'.split(/(A)/); // (A)와 같이 소괄호 안에 구분자를 작성하면 구분자로 문자열을 분리한 위치에 구분자를 포함시킵니다.
js.log(result);
result = '12_34_56'.split('_', 2); // 파라미터에 숫자를 지정하면 지정한 수 만큼 반환
js.log(result);







}