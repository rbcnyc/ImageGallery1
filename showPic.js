

// Introducing the following behaviour:
// click on link, remain on same page
// click a link, see preview of the image on the same page 

// 1)Put a placeholder image on the same page as the list
// 2)When the user clicks a link, intercept the default behaviour
// 3)Replace the placeholder image with the image from the link.

// window.onload = prepareGallery();

function addLoadEvent(func){
	var oldonload = window.onload;
	if (typeof window.onload != 'function'){
		window.onload = func;
	} else {
		window.onload = function(){
			oldonload();
			func();
		}
	}
}

function insertAfter(newElement,targetElement){
	var parent = targetElement.parentNode;
	if (parent.lastChild == targetElement){
		parent.appendChild(newElement);
	} else {
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}

function preparePlaceholder(){
// 	// test brower support
// 	if(!document.createElement) return false;
// 	if(!document.createTextNode) return false;
// 	if(!document.getElementById) return false;
// 	if(!document.getElementById("imagegallery")) return false;

	// Create an image element nodeType with id, src and alt attributes
	var placeholder = document.createElement("IMG");
	placeholder.setAttribute("id","placeholder");
	placeholder.setAttribute("src","images/placeholder.gif");
	placeholder.setAttribute("alt","My image gallery")

	// create a paragraph element node with id attribute and text node
	var description = document.createElement("p");
	description.setAttribute("id","description");
	var desctext = document.createTextNode("Choose an image");
	description.appendChild(desctext);

	// insert the image and paragraph into the document
	// option1
	// document.getElementsByTagName("body")[0].appendChild(placeholder);
	// document.getElementsByTagName("body")[0].appendChild(description);
	// option2
	// document.body.appendChild(placeholder);
	// document.body.appendChild(description);
	// option3 - insertBefore
	// var gallery = document.getElementById("imagegallery");
	// gallery.parentNode.insertBefore(placeholder,gallery);
	// gallery.parentNode.insertBefore(description,gallery);
	// option4 - build insertAfter function as above
	var gallery = document.getElementById("imagegallery");
	insertAfter(placeholder,gallery);
	insertAfter(description,placeholder);
}

function prepareGallery(){
	// check browser understands the following DOM methods
	if ( !document.getElementsByTagName) 
		return false;
	if ( !document.getElementById) 
		return false;
	if ( !document.getElementById("imagegallery")) 
		return false;

	// get the links with two var for imagegallery and a links
	var gallery = document.getElementById("imagegallery");
	var links = gallery.getElementsByTagName("a");
	for ( var i = 0; i < links.length; i++){
		links[i].onclick = function(){
			return showPic(this) ? false : true;
		}
	}
}
 

function showPic(whichpic){
	// Check for placeholder then grab the pics href
	if( !document.getElementById("placeholder") ) return false;
	var source = whichpic.getAttribute("href");

	// Get the placeholder and update the placeholder source
	var placeholder = document.getElementById("placeholder");
	if (placeholder.nodeName != "IMG") return false;
	placeholder.setAttribute("src",source);


	// check for placeholder text and update text description using the images' title attribute
	if ( document.getElementById("description")){
		if ( whichpic.getAttribute("title") ){
			var text = whichpic.getAttribute("title");
			} else {
				var text = "";
			}
		var description = document.getElementById("description");
		if (description.firstChild.nodeType == 3){
				description.firstChild.nodeValue = text;
		}
	} 
	return true;
}

addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);


