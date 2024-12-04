let boxes = document.querySelectorAll(".box"); // All boxes Access
let resetBtn = document.querySelector("#reset-btn"); // Reset game btn Access
let newGameBtn= document.querySelector("#new-btn");  // new start game btn Access
let msgContainer= document.querySelector(".msg-container"); 
let msg= document.querySelector("#msg"); // p tag access  to print winner 


let turnO = true; // playerX, playerO

const winPatterns = [ //winner boxes index number in array
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame = () => {  // Reset Game function
    turnO = true;
    enableBoxes();          // boxes Enable Function call line no.49
    msgContainer.classList.add("hide");  // add hide class to hide winner 
};

boxes.forEach((box) => {        // use forEach loop to access individual box
    box.addEventListener("click", () => {
 
            if(turnO)       // check Player O or X // equal to (turnO===true)
                {
                    box.innerText="O";  // O is print
                    turnO = false;  // Pleyer O is disable and Player X turn
                }else
                {
                    box.innerText= "X"; // X is print
                    turnO= true; // Player O turn and Player X is disable
                }
                box.disabled= true; // All Boxes are Disable when Any one Player is Winner 

              checkWinner();  // Winner check function call line no.61
    });
    
});
const disableBoxes = () => {        // All boxes Disable function //call when show a winner
    for(let box of boxes){
        box.disabled=true;  // one box is click only one time
    }
};
const enableBoxes =() => {      // all boxes are enable when reset a game
    for(let box of boxes){
        box.disabled=false;
        box.innerText = ""; // Text is null when reset all boxes
    }
};
const shoWinner= (winner) => {      //function is used for show winner, call line no.72
    msg.innerText= `Congratulations, ${winner} is Winner`; // show winner Player 
    msgContainer.classList.remove("hide"); // hide class is remove when show winner name because hide class display is none
    disableBoxes(); // disable All boxes function call, line no.44
}

    const checkWinner = () => {  // check winner function call line no.40
        for ( let pattern of winPatterns) {
           
                let pos1Val=boxes[pattern[0]].innerText; //store box inner text in variable using index number 
                let pos2Val=boxes[pattern[1]].innerText;
                let pos3Val=boxes[pattern[2]].innerText;
            
                if(pos1Val != "" && pos2Val != "" && pos3Val !=""){ // check variable is not null
                    if(pos1Val === pos2Val && pos2Val === pos3Val){ // All value is same (o=o=o),(x=x=x)
                   

                    shoWinner(pos1Val); // show winner Name function call, line no.55
                }
            }
        }
    };

newGameBtn.addEventListener("click",resetGame);// btn click event when click a btn start new game, line no.20
resetBtn.addEventListener("click",resetGame); // reset game btn when no one is winner