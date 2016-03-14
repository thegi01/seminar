'use strict';
window.onload = function(){ 

var result = /12/.exec('12_34_12'); 
js.log(result);

js.log(result.index);

js.log(result.input);

result = /12/g.exec('12_34_12'); // g 플래그를 사용하더라도 처음 매치된 문자열 하나를 배열로 반환
js.log(result);





}