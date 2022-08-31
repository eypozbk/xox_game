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
    let row1 = boxDOM[0].textContent == boxDOM[1].textContent &&
        boxDOM[0].textContent == boxDOM[2].textContent && boxDOM[0].textContent !== ""

    let row2 = boxDOM[3].textContent == boxDOM[4].textContent &&
        boxDOM[3].textContent == boxDOM[5].textContent && boxDOM[3].textContent !== ""

    let row3 = boxDOM[6].textContent == boxDOM[7].textContent &&
        boxDOM[6].textContent == boxDOM[8].textContent && boxDOM[6].textContent !== ""

        if (row1 || row2 || row3){
            gameOver = true
        }
        if (row1 ) return winner = boxDOM[0].textContent
        if (row2 ) return winner = boxDOM[3].textContent
        if (row3 ) return winner = boxDOM[6].textContent


    }


function checkColumns(){
    let col1 = boxDOM[0].textContent == boxDOM[3].textContent &&
        boxDOM[0].textContent == boxDOM[6].textContent && boxDOM[0].textContent !== ""

    let col2 = boxDOM[1].textContent == boxDOM[4].textContent &&
        boxDOM[1].textContent == boxDOM[7].textContent && boxDOM[1].textContent !== ""

    let col3 = boxDOM[2].textContent == boxDOM[5].textContent &&
        boxDOM[2].textContent == boxDOM[8].textContent && boxDOM[2].textContent !== ""

}
function checkDio(){
    let dio1 = boxDOM[0].textContent == boxDOM[4].textContent &&
        boxDOM[0].textContent == boxDOM[8].textContent && boxDOM[0].textContent !== ""

    let dio2 = boxDOM[2].textContent == boxDOM[4].textContent &&
        boxDOM[2].textContent == boxDOM[6].textContent && boxDOM[2].textContent !== ""

}













