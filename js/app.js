//to-do app

let newTask = document.querySelector('#new-task');
let inCompleteTaskUl = document.querySelector('.incom-task ul');
let completeTaskUl = document.querySelector(".comp-task ul");
let form = document.querySelector('form');

//functions

let createTask = function(task){
    let listItem = document.createElement('li');
    let taskName = document.createElement('label');
    let checkBox = document.createElement('input');

    checkBox.type = 'checkbox';
    taskName.innerText = task;
   
    listItem.appendChild(checkBox);
    listItem.appendChild(taskName);

    return listItem;

}

let addTask = function(event){
    event.preventDefault();
    let listItems = createTask(newTask.value);

    inCompleteTaskUl.appendChild(listItems);
    newTask.value = "";

    //binding incomplete task

    bindInCompleteTask(listItems,completeTask);
}

let bindInCompleteTask = function(listItem , checkBoxClick){
    let checkBox = listItem.querySelector('input[type="checkbox"]');
    checkBox.onchange = checkBoxClick;
}

let completeTask = function(){
    let listItem = this.parentNode;

    let deleteBtn  = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.className = 'delete';
    listItem.appendChild(deleteBtn);

    let checkbox = listItem.querySelector('input[type="checkbox"]');
    checkbox.remove();

    completeTaskUl.appendChild(listItem);
    bindCompleteTask(listItem, deleteTask);
}


let deleteTask = function(){
    let listItem = this.parentNode;
    let ulList = listItem.parentNode;
    ulList.removeChild(listItem);
}

let bindCompleteTask = function(listItem, buttonClickListener){
    let deleteBtn = listItem.querySelector('.delete');

    deleteBtn.onclick = buttonClickListener;
}

for(let i=0; i<inCompleteTaskUl.children.length; i++){
        bindInCompleteTask(inCompleteTaskUl.children[i],completeTask);
}
for(let i=0; i<completeTaskUl.children.length; i++){
        bindCompleteTask(completeTaskUl.children[i],deleteTask);
}

form.addEventListener('submit', addTask);