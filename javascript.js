let text = prompt("any text");
function tostring(text){
	let num = parseInt(text);
	if(isNaN(num)){return 0;}
	console.log(typeof(num));
}
tostring(text);
