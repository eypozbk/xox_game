const boxDOM = document.querySelectorAll(".box")
const playerText = document.getElementById("result")
let turn ;
let Player = "X"

 
function startgame(){
    playerText.textContent = `${Player}'s turn`
    boxDOM.forEach(box => box.addEventListener("click",() => chooseArea(box)))
}

function chooseArea(box){
    if (box.textContent === ""){
        box.textContent = Player;
        turnPlayer()
    }else{
    }
    
    
    checkwin()
    checktie()
}

function turnPlayer (){
    if (Player === "X" ){
        Player = "O";
        playerText.textContent = `${Player}'s turn`
        return;
    }else if (Player === "O" ){
        Player = "X";
        playerText.textContent = `${Player}'s turn`
    }
}

function checkwin(){
    checkRows()
    checkColumns()
    checkDio()



}
function checktie(){

}

startgame();

function checkRows(){
    let row1 = blocks[0].textContent == blocks[1].textContent &&
        blocks[0].textContent == blocks[2].textContent && blocks[0].textContent !== ""
    let row2 = blocks[0].textContent == blocks[1].textContent &&
        blocks[0].textContent == blocks[2].textContent && blocks[0].textContent !== ""
    let row3 = blocks[0].textContent == blocks[1].textContent &&
        blocks[0].textContent == blocks[2].textContent && blocks[0].textContent !== ""
    }

function checkColumns(){

}
function checkDio(){

}













