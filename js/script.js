const player1 = 'X';
const player2 = 'O';
let playTime = player1;
let gameOver = false;
const $replacement = document.querySelector('#replacement');
const $square = document.querySelectorAll('.square');
const $btnReset = document.querySelector('.btn-reset');

const BoardClick = (event) => {
    let $origin = event.target;
    if(gameOver){
        return;
    }
    if($origin.textContent == ''){
        if(playTime === player1){
            $origin.textContent = player1;
            $origin.setAttribute("jogada", player1);
            playTime = player2;
        } 
        else{
            $origin.textContent = player2;
            $origin.setAttribute("jogada",player2);
            playTime = player1;
        }
        atualizaMostrador();
        verificarVencedor();    
    }
}

const atualizaMostrador = () => {
    if(gameOver){
        return
    }
    if(playTime == player1){
        $replacement.textContent = player1;
    } else{
        $replacement.textContent = player2;
    }
}

const verificarVencedor = () =>{
    const a1 = document.querySelector('#a1').getAttribute("Jogada");
    const a2 = document.querySelector('#a2').getAttribute("Jogada");
    const a3 = document.querySelector('#a3').getAttribute("Jogada");

    const b1 = document.querySelector('#b1').getAttribute("Jogada");
    const b2 = document.querySelector('#b2').getAttribute("Jogada");
    const b3 = document.querySelector('#b3').getAttribute("Jogada");

    const c1 = document.querySelector('#c1').getAttribute("Jogada");
    const c2 = document.querySelector('#c2').getAttribute("Jogada");
    const c3 = document.querySelector('#c3').getAttribute("Jogada");


    let vencedor = "";
    if(((a1 == b1 && a1 == c1) || (a1 == a2 && a1 == a3) || (a1 == b2 && a1 == c3)) && a1!=""){
        vencedor = a1;
    }
    else{ 
        if((b2 == a2 && b2 == c2 && b2 != "") || (b2 == b1 && b2 == b3 && b2 != "") || (b2 == a3 && b2 == c1 && b2 != "")){
            vencedor = b2;
        }
        else{ 
            if(((c3 == c1 && c3 == c2) || (c3 == a3 && c3 == b3)) && c3!=""){
                vencedor = c3;
            } 
        }
    }
    if(vencedor != ""){
        gameOver = true;
        setTimeout(() => {
            alert(`O ganhador foi o: ${vencedor} `);
            $btnReset.textContent = 'Jogar Novamente';
        }, 50);
    } 
}

$btnReset.addEventListener('click', () => {
    for(let i = 0; i < $square.length; i++){
        $square[i].textContent = '';
        $square[i].setAttribute("jogada", '');
        gameOver = false;
        playTime = player1;
        atualizaMostrador();

    }
})

atualizaMostrador();


