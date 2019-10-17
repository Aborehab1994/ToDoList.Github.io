const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");


let LIST = [] 
,id = 0;

const today = new Date();
const options = {weekday: "short", day:"numeric", month: "long"};


dateElement.innerHTML = today.toLocaleDateString("en-US", options)


function addToDo(toDo, id, done , trash) {

	if(trash) {return;}

	const DONE = done;


	const item = `<li class="item">
	                <i class="fa ${DONE} co" jop="complete" id="${id}"></i>
	                <P class = "text">${toDo}</P>
					<i class="fa fa-trash-o de" jop="delete" id="${id}"></i> 
			</li>
`;
	const position = "beforeend";
	list.insertAdjacentHTML(position, item);

}

document.addEventListener("keyup", function(event){
	if(event.keyCode == 13) {
		const toDo = input.value;
		if (toDo){
			addToDo(toDo);
			LIST.push({
				name : toDo,
				id : id,
				done : false,
				trash : false

			});
			id++;
		}
	input.value = "";

	}

});



function removeToDo(element) { 
element.parentNode.parentNode.removeChild(element.parentNode);

LIST[element.id].trash = true;
}


list.addEventListener("click", function(event){

	const element = event.target;
	const elementJop = element.attributes.jop.value;

if(elementJop == "delete") { 
removeToDo(element);
}
});


