console.log(`Welcome to Tic Tac Toe`);
let backgroundMusic= new Audio(`music.mp3`);
let nextTurnMusic= new Audio(`ting.mp3`);
let gameOverMusic= new Audio(`gameover1.wav`);
let turn=`X`;
let isGameover=false;

//function for change turn
const changeTurn=()=>{
    return turn===`X`?`0`:`X`;
}
//function to check for win
const checkWin=()=>{
    //add logic for win
    let boxtext= document.getElementsByClassName(`boxText`);
    let wins_desktop=[
        [0,1,2,0,5,0] , [3,4,5,0,15,0] , [6,7,8,0,25,0] ,
        [0,3,6,-10,15,90] , [1,4,7,0,15,90] , [2,5,8,10,15,90] ,
        [0,4,8,0,15,45] , [2,4,6,0,15,135]
    ]
    let wins_phone=[
        [0,1,2,0,11.5,0] , [3,4,5,0,36.5,0] , [6,7,8,0,61.5,0] ,
        [0,3,6,-25,37,90] , [1,4,7,0,37,90] , [2,5,8,25.5,37,90] ,
        [0,4,8,-1,35.5,45] , [2,4,6,-1,38,135]
    ]
    if(window.innerWidth > 960) {
        wins_desktop.forEach(e=>{
            wins_desktop.forEach(e=>{
                if( (boxtext[e[0]].innerText===boxtext[e[1]].innerText ) && ( boxtext[e[2]].innerText===boxtext[e[1]].innerText ) && ( boxtext[e[0]].innerText!==`` ) ){
                    isGameover=true;
                    document.querySelector(`.info`).innerText= boxtext[e[0]].innerText + ` has Won !!!`;
                    gameOverMusic.play();
                    document.querySelector(`.imgBox`).getElementsByTagName(`img`)[0].style.width=`50%`;   
                    document.querySelector(`.line`).style.width=`30vw`;
                    document.querySelector(`.line`).style.transform= `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
                }
            })    
        })
    }
    else{
        console.log("hello");
        wins_phone.forEach(e=>{
            wins_phone.forEach(e=>{
                if( (boxtext[e[0]].innerText===boxtext[e[1]].innerText ) && ( boxtext[e[2]].innerText===boxtext[e[1]].innerText ) && ( boxtext[e[0]].innerText!==`` ) ){
                    isGameover=true;
                    document.querySelector(`.info`).innerText= boxtext[e[0]].innerText + ` has Won !!!`;
                    gameOverMusic.play();
                    document.querySelector(`.imgBox`).getElementsByTagName(`img`)[0].style.width=`50%`;   
                    document.querySelector(`.line`).style.width=`75vw`;
                    document.querySelector(`.line`).style.transform= `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
                }
            })    
        })
    }
}
//Game Logic
let boxes= document.getElementsByClassName(`box`);
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector(`.boxText`);
    element.addEventListener(`click`,()=>{
        if(boxtext.innerText===``){
            boxtext.innerText=turn;
            turn=changeTurn();
            nextTurnMusic.playbackRate = 2;
            nextTurnMusic.play();
            checkWin();
            if(!isGameover){
                document.getElementsByClassName(`info`)[0].innerText = ` Turn for `+ turn;
            }
        }
    })
})

//reset button function
reset.addEventListener('click', ()=>{
    let boxtext=document.querySelectorAll(`.boxText`);
    Array.from(boxtext).forEach(element=>{
        element.innerText="";
    })
    turn="X";
    isGameover=false;
    document.querySelector(`.line`).style.width=`0`;
    document.getElementsByClassName(`info`)[0].innerText = `------- Turn for `+ turn +` -------`;
    document.querySelector(`.imgBox`).getElementsByTagName(`img`)[0].style.width=`0`;
})