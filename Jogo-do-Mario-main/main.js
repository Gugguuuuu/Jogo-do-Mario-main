const nuvem = document.querySelector(".nuvem")
const gameboard = document.querySelector(".game-board")
const mario = document.querySelector(".mario");
const pipe = document.querySelector(".cano");
const buttonRestart = document.querySelector(".restart");
const bird = document.querySelector(".bird-box");
const gameOver = document.querySelector(".gameOver");
function jump(){
  mario.classList.add('jump')
  setTimeout(()=>{
    mario.classList.remove('jump')
  }, 500)
}

const loop = setInterval(()=>{
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if( pipePosition <= 90 && pipePosition > 0 && marioPosition < 70){
        mario.style.animation = "none";
        mario.src = "./assets/game-over.png";
        mario.style.width = "60px"
        mario.style.marginLeft = "10px";
        mario.style.bottom = "0px";
        pipe.style.animation = "none";
        pipe.style.left =  "120px";
        nuvem.style.animation = "none";
        bird.style.animation = "none";
        gameOver.style.visibility = "visible"
        gameboard.style.background = "linear-gradient( rgb(13, 14, 80), rgb(104, 100, 100))";
        
        clearInterval(loop);
       }
}, 10)

function reiniciar(){
  mario.src = "./assets/mariorun2.gif";
  gameOver.style.visibility = "hidden"
  mario.style.animation = "mario-animation 500ms ease-out";
  nuvem.style.animation = "cloud 20s infinite linear";
  mario.style.width = "200px"
  mario.style.bottom = "-58px";
  bird.style.animation = "bird 10s infinite linear";
  pipe.style.animation = "pipe-animations 1.5s infinite linear";
  pipe.style.left = "";
  gameboard.style.background = 'linear-gradient(180deg, rgb(85, 204, 255), rgb(255, 255, 255))';
  mario.style.marginLeft = "";
  jump()
  const loop = setInterval(()=>{
    const pipePosition = pipe.offsetLeft;                       
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if( pipePosition <= 90 && pipePosition > 0 && marioPosition < 70){
        mario.style.animation = "none";
        mario.src = "./assets/game-over.png";
        mario.style.width = "60px"
        mario.style.marginLeft = "10px";
        mario.style.bottom = "0px";
        pipe.style.animation = "none";
        pipe.style.left =  "120px";
        nuvem.style.animation = "none";
        bird.style.animation = "none";
        gameOver.style.visibility = "visible"
        gameboard.style.background = "linear-gradient( rgb(13, 14, 80), rgb(104, 100, 100))";
        
        clearInterval(loop);
       }
}, 10)
}
document.addEventListener("keydown" , jump)
