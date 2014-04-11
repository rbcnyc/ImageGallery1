// introducing the following behaviour:
// click on link, remain on same page
// clicak a link, see preview of the 
// image on the same page 

// 1)Put a placeholder image on the 
// same page as the list
// 2)When the user clicks a link,
// intercept the default behaviour
// 3)Replace the placeholder image 
// with the image from the link.

window.onload = prepareGallery();

function prepareGallery(){
	// check browser understands the following DOM methods
	if ( !document.getElementsByTagName) 
		return false;
	if ( !document.getElementById) 
		return false;
	if ( !document.getElementById("imagegallery")) 
		return false;

	// get the links with two var for imagegallery and a
	var gallery = document.getElementById("imagegallery");
	var links = gallery.getElementsByTagName("a");


	for ( var i = 0; i < links.length; i++){
			links[i].onclick = function(){
				showPic(this);
				return false;
			}
			// console.log("it's a link");
	}
}
 

function showPic(whichpic){
	// Grab the pics href
	var source = whichpic.getAttribute("href");

	// Get the placeholder
	var placeholder = document.getElementById("placeholder");

	// Update the placeholder source
	placeholder.setAttribute("src",source);

	// update the text description using the images' title attribute
	var text = whichpic.getAttribute("title");
	var description = document.getElementById("description");
	description.firstChild.nodeValue = text;
}



// function addLoadEvent(func){
// 	var oldonload = window.onload;
// 	if (typeof window.onload != 'function'){
// 		window.onload = func;
// 	} else {
// 		window.onload = function(){
// 			oldonload();
// 			func();
// 		}
// 	}
// }

// addLoadEvent(prepareGallery);


// function countBodyChildren(){
// 	var body_element = document.getElementsByTagName("body")[0];
// 	alert (body_element.nodeType)
// }
// window.onclick = showPic();


// console.log(document.getElementsByTagName("body")[0].childNodes.length);
