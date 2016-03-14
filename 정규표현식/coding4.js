'use strict';
window.onload = function(){ 
/*
예)계좌번호 입력시 : 계좌번호와 - 입력 받은 후  '-'을 뺀 번호만 넘겨라.
*/

function check(p){
	var n = p.match(/^[0-9-]+$/g);
	if(n) return js.log(n[0].replace(/-/g,''));
	return;
}
check("ABCDE");
check("123-456");
check("506-060-55");



}