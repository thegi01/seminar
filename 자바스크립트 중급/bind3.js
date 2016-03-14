window.onload = function(){ 
	var el = document.getElementById('clickID');
	el.onclick = show.bind(sports, el);
}

var sports = {
	value : 123
}
function show(element, event) {
	js.log(element.textContent);
	js.log(event.target.id);
	js.log(this.value);
}