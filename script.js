const boxes= document.querySelectorAll(".box");
const msg= document.querySelector("#msg");
const msgContainer= document.querySelector(".msg-container");
const  hideMain= document.querySelector(".hide-main");
let turnO=true;
let turn=0;

const winPatterns =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box)=>{


    box.addEventListener("click",()=>{

        if(turnO){
            box.innerHTML="O";
            turnO=false
        }
        else{
            box.innerHTML="X";
            turnO=true;
        }
        box.style.pointerEvents="none";
        if(getWinner()){
            return;
        }
        turn++;
        if(turn===9){
                checkDraw();
        }
    })
})


function checkDraw(){
    msg.innerHTML=`It's a Draw`;
    msgContainer.classList.remove("hide");
    hideMain.style.display="none";
    
}
function getWinner(){

    for(let pattern of winPatterns ){

        let pos1=boxes[pattern[0]].innerHTML;
        let pos2=boxes[pattern[1]].innerHTML;
        let pos3=boxes[pattern[2]].innerHTML;

        if(pos1!=="" && pos2!=="" && pos3!==""){

            if(pos1===pos2 && pos2==pos3){
                
                showWinner(pos1);
                return true;
            }
            
        }

    }
    return false;
  
}

function showWinner(win){

    msg.innerHTML=`${win} is the Winner`;
    msgContainer.classList.remove("hide");
    hideMain.style.display="none";

}

function resetGame(){

    enableBox();
    turn=0;
    msgContainer.classList.add("hide");
    hideMain.style.display="block";
}

function enableBox(){

    for(box of boxes){
        box.style.pointerEvents= "auto";
        box.innerHTML="";
    }
}


const resetBtn= document.querySelector("#reset-btn");
const newBtn= document.querySelector("#new-btn");

resetBtn.addEventListener("click",resetGame);
newBtn.addEventListener("click",resetGame);