'use strict';
window.onload = function(){ 

var result = 'A12 12B 12C'.match(/12\b/g);
js.log(result);
result = 'A12 12B 12'.match(/12\b/g); // 매치 대상 끝은 63개 이외 문자로 인식 
js.log(result);
result = '12 12 C12'.match(/\b12/g); // 매치 대상 처음은 63개 이외 문자로 인식
js.log(result);
result = 'A12 12 C12'.match(/\b12\b/g);
js.log(result);


}





