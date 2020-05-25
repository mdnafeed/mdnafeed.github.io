console.log('local Storage & Session Storage');
shownotes();
let addNotes = document.getElementById('addNotes');

let notes = document.getElementById('notes');

addNotes.addEventListener('click',function(element,index){
	let taskNotes = notes.value;

	let item = localStorage.getItem('taskNotes');

	if (taskNotes.length != 0 ) {

		if (item == null) {
			itemObj = [];
		}
		else{
			
			itemObj = JSON.parse(item);
		}
		itemObj.push(taskNotes);
		localStorage.setItem('taskNotes' , JSON.stringify(itemObj));
		taskNotes = '';
		console.log(itemObj);
		// console.log(taskNotes);
	}  //close null value add in js

	shownotes();
});

function shownotes(){
	
	let items = localStorage.getItem('taskNotes');
	
	let html = '';

	let showtask = document.getElementById('showtask');
	
	if (items == null) {
		pasre = [];
	}
	else{
		
		let pasre = JSON.parse(items);

		pasre.forEach( function(element, index) {
			
			html += `
						<div class="card mx-2 my-2" style="width: 16rem;">
						  <div class="card-body">
						    <h5 class="card-title">Task ${ index + 1 }</h5>
						    <p class="card-text">${ element }</p>
						    <a href="javascript:void(0)" onclick="deleteItem( ${ index } )" class="btn btn-primary">Delete</a>
						  </div>
						</div>
						`;
		});
		showtask.innerHTML = html;
		
	}
}

function deleteItem(index){
	
	let taskNotes = localStorage.getItem('taskNotes');	

	if (taskNotes == null) {
		itemObj = [];
	}
	else{
		itemObj = JSON.parse(taskNotes);
	}

	itemObj.splice(index, 1);

	localStorage.setItem('taskNotes',JSON.stringify(itemObj));

	shownotes();
	console.log(index);

}