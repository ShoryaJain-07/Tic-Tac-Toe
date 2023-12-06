let gameover=false;
let turn = "X";

const changeturn = ()=>{
    return turn === "X"? "O": "X"
}

const store = () => {
    let i=0;
    const bb=document.getElementsByClassName("boxtexts");
    for(let j=0;j<9;j++)
    {
        console.log(bb[j].innerText);
        localStorage.setItem(j,bb[j].innerText)
    }
    localStorage.setItem("turn",turn);
}

const streset = () => {
    let i=0;
    const bb=document.getElementsByClassName("boxtexts");
    for(let j=0;j<9;j++)
    {
        console.log(bb[j].innerText);
        localStorage.setItem(j," ");
    }
    localStorage.setItem("turn","X");
}

const boxtext=document.getElementsByClassName("boxtexts");
for (let i=0;i<9;i++){
    boxtext[i].innerText=localStorage.getItem(i)
}

turn=localStorage.getItem("turn");
document.querySelector(".info").innerText="Turn for "+turn;

const check=()=>{
const wins=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
wins.forEach(e => {
    if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[1]].innerText===boxtext[e[2]].innerText) && (boxtext[e[0]].innerText!=""))
    {
        document.getElementsByClassName("info")[0].innerText=boxtext[e[0]].innerText + " won"
        gameover=true;
        console.log(e);
        boxtext[e[0]].classList.add("win");
        boxtext[e[1]].classList.add("win");
        boxtext[e[2]].classList.add("win");
    }
});
}

check();

let boxes=document.getElementsByClassName("b");
Array.from(boxes).forEach(element =>{
    let bt=element.querySelector(".boxtexts");
    element.addEventListener('click',()=>{
        if(bt.innerText==="")
        {
        bt.innerText=turn;  
        check();
        turn=changeturn();
        store();
        if(!gameover){
            document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;

        }
    }
})})


let reset=document.querySelector(".reset");

reset.addEventListener('click', ()=>{
    let bt=document.getElementsByClassName("boxtexts")
    Array.from(bt).forEach((element)=>{
        element.innerText="";
    })
    turn="X";
    gameover=false;
    streset();
    document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
    Array.from(boxtext).forEach(e=>{
        e.classList.remove("win");
    })
})