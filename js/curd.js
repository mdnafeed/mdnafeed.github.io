console.log('ES6');
class Employee{
	constructor(empName,empSalary,empExp){
		
		this.name = empName;
		this.salary = empSalary;
		this.emp = empExp;

	}
	salary1 (){
		return `${this.name} is a good employee in my office`;
	}
	
	empEmp(){
		return ` ${this.emp} Year`;
	}

	EmpSalary(){
		return `${this.salary} Salary`;
	}
}
emp = new Employee('Nafeed',60000,5);

console.log(emp.empEmp());
console.log(emp.EmpSalary());

showDetail();

let submit = document.getElementById('submit');
submit.addEventListener('click', function(element,index){
	let studentName = document.getElementById('studentName');
	let age = document.getElementById('age');
	let course = document.querySelector('input[name="course"]:checked').value;

	let studentDetail ={
			name : studentName.value,
			age :age.value,
			course : course
	};

	let items = localStorage.getItem('items');
	if (items == null) {
		itemRecord = [];
	}
	else{
		itemRecord = JSON.parse(items);
	}
	itemRecord.push(studentDetail);

	localStorage.setItem('items',JSON.stringify(itemRecord));

	element.preventDefault();
	showDetail();
});

function showDetail(){
	let html = '';
	 let items = localStorage.getItem('items');
	 if (items == null) {

	 }
	 else{
	 	let getParseObject = JSON.parse(items);
	 	let showStudentDetail = document.querySelector('.showStudentDetail');
	 	Array.from(getParseObject).forEach(function(element,index){

	 			html += `
							    <tr>
							      
							      <td>${element.name}</td>
							      <td>${element.age}</td>
							      <td>${element.course}</td>
							      <td><button class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter" onclick="updateRecord(${index})">Update</button></td>
							      <td><button class="btn btn-danger" onclick="deleteOneRecored(${index})">Dlete</button></td>
							    </tr>
							    <tr>
	 			`;

	 		showStudentDetail.innerHTML = html;
	 	});
	 }
}
function deleteOneRecored(id){
	let items = localStorage.getItem('items');
	if (items == null) {

	}
	else{

		itemObject = JSON.parse(items);
		itemObject.splice(id, 1);
		localStorage.setItem('items',JSON.stringify(itemObject));
		showDetail();

	}
}

function updateRecord(id){
	let items = localStorage.getItem('items');
	let html ='';
	let modal = document.querySelector('.modalUpdate');
	if (items == null ) {

	}
	else{
		itemObject = JSON.parse(items);
		
		let singleArray = itemObject[id];

		
		html +=`
			<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
			  <div class="modal-dialog modal-dialog-centered" role="document">
			    <div class="modal-content">
			      <div class="modal-header">
			        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
			        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
			          <span aria-hidden="true">&times;</span>
			        </button>
			      </div>
			      <div class="modal-body">
						<div class="container">
							<div class="row">
								<div class="col-md-12">
									<div class="form-group">
										<input type="text" class="form-control" value="${ singleArray.name }" id="name">
									</div>
									<div class="form-group">
										<input type="text" class="form-control" value="${ singleArray.age }" id="name">
									</div>
								</div>
					        </div>
						</div>
			      </div>
			      <div class="modal-footer">
			        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
			        <button type="button" class="btn btn-primary">Save changes</button>
			      </div>
			    </div>
			  </div>
			</div>
		`
		modal.innerHTML = html;
		showDetail();
	}


}