const input=document.getElementById('input');
const btn=document.getElementById('btn');
const list =document.querySelector('.list');

document.addEventListener('DOMContentLoaded',getdata);
btn.addEventListener('click',createtask);

function createtask(e){
	e.preventDefault();
	if(input.value){
		const newtask=document.createElement('li');
		newtask.innerHTML=input.value;
		newtask.classList.add('task-li');
		list.appendChild(newtask);
		savedata(input.value);
	}
	input.value = '';
}

list.addEventListener('click',(e) => {
 	const item = e.target;
 	if(item.classList.contains("task-li")){
 		removetask(item);
 		item.remove();
 	}
})

function savedata(task){
	let tasks;
	if(localStorage.getItem('tasks') === null){
	 	tasks = [];
	}else{
	 	tasks = JSON.parse(localStorage.getItem('tasks'));
	}
	tasks.push(task);
	localStorage.setItem('tasks',JSON.stringify(tasks));
}

function getdata(){
	let tasks;
	if(localStorage.getItem('tasks') === null){
	 	tasks = [];
	}else{
	 	tasks = JSON.parse(localStorage.getItem('tasks'));
	}

	tasks.forEach(function(task){
		const newtask=document.createElement('li');
		newtask.innerHTML=task;
		newtask.classList.add('task-li');
		list.appendChild(newtask);
	});
}

function removetask(task){
 	let tasks;
 	if(localStorage.getItem('tasks') === null){
 	 	tasks = [];
 	}else{
 	 	tasks = JSON.parse(localStorage.getItem('tasks'));
 	}
	
 	const index = task.innerHTML ;
 	if (index !== -1) {
		tasks.splice(tasks.indexOf(index),1);
		localStorage.setItem('tasks',JSON.stringify(tasks));
	}
}