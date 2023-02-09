const fallDown=()=>{
    let mario = document.querySelector(".ball");
    mario.classList.toggle ('falling');
}

const big=()=>{
    let circle = document.querySelector(".ball");
    circle.classList.toggle('big');
}

const small=()=>{
    let size = document.querySelector(".ball");
    size.classList.toggle('small');
}

const teleport=()=>{
    let movement = document.querySelector(".ball");
    movement.classList.toggle('teleport');
}

const rotate=()=>{
    let mLeft = document.querySelector(".ball");
    mLeft.classList.toggle('rotate');
}

const rotorZ=()=>{
    let zMove = document.querySelector(".ball");
    zMove.classList.toggle('rotorZ');
}