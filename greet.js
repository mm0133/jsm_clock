const form= document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting =document.querySelector(".js-greetings");
const showing='showing';
const USER_LS = "currentUser";


function init(){
    const currentUser=localStorage.getItem(USER_LS)
    if(currentUser===null){
        askForName();


    }else{
        paintGreeting(currentUser);

    }

}


function askForName(){
    form.classList.add(showing);
    form.addEventListener("submit",handleSubmit)
}


function handleSubmit(event){
    event.preventDefault();
    const currentValue=input.value
    paintGreeting(currentValue);
    saveName(currentValue);

}

function paintGreeting(text){
    form.classList.remove(showing)
    greeting.classList.add(showing)
    greeting.innerText = `Hello ${text}`
}

function saveName(text){
    localStorage.setItem(USER_LS, text);
}




init();