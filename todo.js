const todoform= document.querySelector(".js-toDoForm")
const todoinput = todoform.querySelector("input")
const todolist = document.querySelector(".js-toDoList")

const TODOS_LS= 'toDos';

let todos = [];

function init(){
    loadToDos();
    todoform.addEventListener('submit', handleSubmit)
}

function loadToDos(){
    const loadtoDos=localStorage.getItem(TODOS_LS)
    if(loadtoDos!==null){
        const parsedToDos =JSON.parse(loadtoDos);
        parsedToDos.forEach(function(todo){
            paintToDo(todo.text)
        })
    }
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue =todoinput.value;
    paintToDo(currentValue);
    todoinput.value="";


}

function paintToDo(text){
    const li = document.createElement("li")
    const delBtn = document.createElement("button");
    const span = document.createElement('span');
    const newid = todos.length + 1;
    delBtn.innerHTML= "x";
    delBtn.addEventListener("click",deletetodo)
    span.innerText= text
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newid
    todolist.appendChild(li);
    const toDoobj ={text: text,
    id:newid};
    todos.push(toDoobj);
    savetodos();
}

function savetodos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(todos));
}

function deletetodo(event){
    const btn = event.target;
    const li = btn.parentNode;
    todolist.removeChild(li)
    const cleantodos=todos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    todos=cleantodos
    savetodos();
}

function filterFn(toDo){
    return toDo.id
    
}
init();