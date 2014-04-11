// Testing graceful degredation
// and progressive enhancement
// and backward compatibility

window.onload = prepareLinks;
function prepareLinks(){
	if( !document.getElementsByTagName ) return false;
	var links = document.getElementsByTagName("a");
	// console.log(links[4].getAttribute('class'));
	for(var i = 0; i < links.length; i++){
		if (links[i].getAttribute('class') == "popup"){
			links[i].onclick = function (){
				popUp(this.getAttribute('href'));
				return false;
			}
		}
	}
}

function popUp(winURL){
	window.open(winURL,"popup","width=320,height=480");
}



// window.onload(attachEventsToLinks);
// console.log("elevensies");
