let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let msg=document.querySelector("#msg");
let newbtn=document.querySelector("#newgame");
let msgcontainer=document.querySelector(".msg-container");
let turnO=true;
let count = 0;
let winning=[
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
        if(turnO===true){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        let iswinner=checkwinner();
        if(count===9 && !iswinner){
            gamedraw();

        }
    })
})
const gamedraw = ()=>{
    msg.innerText = "draw";
    msgcontainer.classList.remove("hide");
    disableboxes();
}
const resetgame = ()=>{
    turnO=true;
    count=0;
    enableboxes();
    msgcontainer.classList.add("hide");
}
const disableboxes = ()=>{
    for( let box of boxes){
        box.disabled=true;
    }
}
const enableboxes = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showwinner=(winner)=>{
    msg.innerText=`winner:${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}

const checkwinner=()=>{
    for(let pattern of winning){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val !="" && pos2val !="" && pos3val !="" )
        {
            if(pos1val == pos2val && pos2val==pos3val){
                console.log("winner:",pos1val);
                showwinner(pos1val);
        } }
    }
}
newgame.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame)