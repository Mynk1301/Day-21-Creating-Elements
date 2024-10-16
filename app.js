function rev() {                     //arrow functions can also be used.
    let btn = document.getElementById('btn');
    let hh = document.getElementById('hh');
    hh.innerText = "Thanks for joining champ !!";
    btn.style.background = 'darkred';
    document.getElementById('btn').style.borderRadius = '40px';    // either we store the value in another variable or we can use it directly.
}


//rolling dice

roll = () => {                       //arrow function use kra h .
    let btn1 = document.getElementById('btn1');
    let span = document.getElementById('dice');
    let dice = document.getElementById('dice');
    let audio = document.getElementById('dice-audio');
    audio.play();
    audio.volume = 0.2;
    let num = Math.floor(Math.random() * 6) + 1;
    dice.classList.add('spin');
    setTimeout(function () {
        dice.classList.remove('spin');
        span.innerText = num;
    }, 1000);
}


//setTimeout(function delay) (delay is always in milliseconds)

//creating boxes

create = () => {
    let btn = document.getElementById('btn2');
    let boxContainer = document.getElementById('boxContainer');
    let div = document.createElement('div');
    div.classList.add('box');
    boxContainer.appendChild(div); //appendchild put the element as a child inside a div(parent).
}

// adding names and email stuff

let users = [];
let users_container = document.getElementById('users-container')      //getting element from the html file

function renderUsers(){
    users.forEach((user)=>{
    let div = document.createElement('div');      //creating element to show up on the screen
    let name = document.createElement('p');       //creating element to show up on the screen
    let email = document.createElement('p');      //creating element to show up on the screen
    div.classList.add('user');         //adding css class to the div


    name.innerText=user.name;            //importing values
    email.innerText=user.email;          //importing values
    users_container.appendChild(div);    //combining the js element into html container
    div.appendChild(name);               //combining the values to the js div
    div.appendChild(email);          //combining the values to the js div
    })
}



addUser = () => {
    let name = document.getElementById('name');
    let email = document.getElementById('email');

    let user = {                 //storing data as object inside
        name: name.value,
        email: email.value,
    }

    users.push(user);       //adding the user data into users array ==> array of objects

    renderUsers();      //creating another fn for the ease of the code

}