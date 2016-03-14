'use strict';
window.onload = function(){ 

var result = '12_34_56'.split('_');
js.log(result);
result = '12_34_56'.split(/_/);
js.log(result);
result = '12_34_78'.split('S'); // 매치되지 않으면 매치 대상을 하나의 배열 엘리먼트로 반환
js.log(result);
result = '12_34_78'.split(); // 파라미터에 매치 대상을 작성하지 않으면 매치 대상을 하나의 배열 엘리먼트로 반환
js.log(result);


}