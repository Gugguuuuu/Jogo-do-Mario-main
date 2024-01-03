const nuvem = document.querySelector(".nuvem")
const gameboard = document.querySelector(".game-board")
const mario = document.querySelector(".mario");
const pipe = document.querySelector(".cano");
const buttonRestart = document.querySelector(".restart");
const bird = document.querySelector(".bird-box");
const gameOver = document.querySelector(".gameOver");
const textGameOver = document.querySelector("#textGameOver")
const princesa = document.querySelector(".princesa");
const vida = document.querySelector(".vida");
const marioComemorando = document.querySelector(".marioComemorando")
let score = 0;

function jump(){
  mario.classList.add('jump')
  setTimeout(()=>{
    mario.classList.remove('jump')
  }, 500)
}
const pontuacao = setInterval(
  ()=>{
    const marioPosition2 = +window.getComputedStyle(mario).bottom.replace('px', '');
    if( marioPosition2 == 180){
      score++;
      vida.innerHTML = "vida : " + score ;
    }
    if(score == 50){
       textGameOver.innerHTML = "Você ganhou, Parabéns";
       textGameOver.style.visibility = "visible";
       textGameOver.style.color = "black"
       buttonRestart.style.visibility = "visible"
       pipe.style.visibility = "hidden";
       pipe.style.animation = "none";
       nuvem.style.visibility = "hidden";
       mario.style.visibility = "hidden";
       bird.style.visibility = "hidden";
       marioComemorando.style.visibility = "visible";
       vida.style.visibility = "hidden";; 
       
    }
  }, 1)

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
  window.location.reload()
}

document.addEventListener("keydown" , jump)
