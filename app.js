let boxes = document.querySelectorAll(".box");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msgContainer"); 
let resetGame = document.querySelector("#resetGame");

let turnX = true;
let count = 0;

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
        console.log("Box was clicked");
        if(turnX){
            box.innerText = 'X';
            turnX = false;
        }
        else{
            box.innerText = 'O';
            turnX = true;
        }
        box.disabled = true;
        count++;

        checkWinner();
    })
});


const checkWinner = () => {
    for(let i of winningCombos){
        let pos1 = boxes[i[0]].innerText;
        let pos2 = boxes[i[1]].innerText;
        let pos3 = boxes[i[2]].innerText;

        if(pos1 != '' && pos2 != '' && pos3 != ''){
            if((pos1 === pos2) && (pos2 === pos3)){
                displayWinner(pos1);
                disableBoxes();
                return;
            }
        }
    }

    if (count === 9) {
        msg.innerText = "Draw!";
        msgContainer.classList.remove("hide");
    }
};


const displayWinner = (winner) => {
    msg.innerText = `Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  };


const disableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
}


const enableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = '';
    });
}

const resetGameFunc = () => {
    turnX = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
}


resetGame.addEventListener("click", resetGameFunc);

