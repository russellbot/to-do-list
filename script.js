var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var delbutton = document.getElementsByClassName("delbutton")

function inputLength() {
	return input.value.length;
}

//create a new list item
function createListElement() {
	var li = document.createElement("li");
	ul.insertAdjacentHTML('beforeend', '<li>' + input.value + '<button class="delbutton">Delete</button></li>');
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.which === 13) {
		createListElement();
	}
}

//click on a list item and it strikes through the text
function toggleDone(e) {	
	if(e.target && e.target.nodeName == "LI") {
		e.target.classList.toggle("done");
	}
		
}

//click the delete button to remove the list item
function deleteListItem(e) {
	if(e.target.classList.contains('delbutton')) {
		ul.removeChild(e.target.parentElement);
	}
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", toggleDone); 

ul.addEventListener("click", deleteListItem);

