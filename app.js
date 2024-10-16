function rev() {                     //arrow functions can also be used.
    let btn = document.getElementById('btn');
    let hh = document.getElementById('hh');
    hh.innerText = "Thanks for joining champ !!";
    btn.style.background = 'darkred';
    document.getElementById('btn').style.borderRadius = '40px';    // either we store the value in another variable or we can use it directly.
}


//rolling dice

roll=() => {                       //arrow function use kra h .
    let btn1 = document.getElementById('btn1');
    let span = document.getElementById('dice');
    let dice = document.getElementById('dice');
    let audio = document.getElementById('dice-audio');
    audio.play();
    let num = Math.floor(Math.random() * 6) + 1 ;
    dice.classList.add('spin');
    setTimeout(function () {
        dice.classList.remove('spin');
        span.innerText = num;
    }, 1000);
}


//setTimeout(function delay) (delay is always in milliseconds)

