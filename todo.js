let addList = document.getElementById('addlist');
let itemList = document.getElementById('mylist');


//Create Delete	 Button on each element
let closeNode = document.getElementsByTagName('li');


for (let i = 0; i < closeNode.length; i++) {
	let spanELem = document.createElement("span");
	let closeElem = document.createTextNode("x");

	spanELem.className = "close";
	spanELem.appendChild(closeElem);
	closeNode[i].appendChild(spanELem);

}

//Listen to submit event
addList.addEventListener('submit', addNewList);

function addNewList(e) {
	//prevent default behavior
	e.preventDefault();

	//create new list
	let input = document.getElementById('userinput').value;

	let list = document.createElement('li');
	list.className = 'list-group-item';
	list.appendChild(document.createTextNode(input));


	let spanELem = document.createElement("span");
	let closeElem = document.createTextNode("x");
	spanELem.className = "close";
	spanELem.appendChild(closeElem);
	list.appendChild(spanELem);

	itemList.appendChild(list)


}

//Close each item
itemList.addEventListener('click', removeItem);

function removeItem(e){
	if(e.target.classList.contains('close')){
		if(confirm("Delete this from your list")){
			let list = e.target.parentElement;
			itemList.removeChild(list);
		}
	}
}



// Done list
let done = document.querySelector('ul');

done.addEventListener('click', doneList)
	
	function doneList (ev) {
	if (ev.target.tagName === 'LI') {
		ev.target.classList.toggle('checked');
	}
	}

