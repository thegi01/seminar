'use strict';
window.onload = function(){ 

var result = 'ABCDEF'.match(/AB(?:CD)EF/);
js.log(result);
js.log(RegExp.$1);

}


