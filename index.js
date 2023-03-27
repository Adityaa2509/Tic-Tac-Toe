console.log("Chaliye Banate Hai Game");
const boxes = document.querySelectorAll(".box");
const gamerinfo = document.querySelector(".gamer-info");
const newbtngame = document.querySelector(".btn");
let currPlayer;
let gamegrid;

const winningpos = [[0,1,2],
                    [3,4,5],
                    [6,7,8],
                    [0,3,6],
                    [1,4,7],
                    [2,5,8],
                    [0,4,8],
                    [2,4,6]];

// let's create a fn to initalize game
function initgame()
{
    currPlayer="X";
    gamegrid=["","","","","","","","",""]
    
    
    boxes.forEach((box,index)=>{
        box.innerText="";
        boxes[index].style.pointerEvents="all";
        boxes[index].classList.remove("win");
        
        // box.classList = `box box${index+1}`;
        //by this line all the default value of box and box[index+1] propertirs are intoial;ized
    });
    
    newbtngame.classList.remove("active");
    
    gamerinfo.innerHTML = `Current Player: ${currPlayer}`;



}
initgame();

//for zero-kaata action on click
boxes.forEach((box,index)=>
{
   box.addEventListener("click",()=>{handleclick(index);}) 
});

function handleclick(index)
{
    if(gamegrid[index] === ""){
    boxes[index].innerText = currPlayer;
        gamegrid[index] = currPlayer;
        boxes[index].style.pointerEvents="none";
        //swap the turn
        swapturn();
        //check koi jeeta yaa nahi
        checkwin();
}
}
function swapturn()
{
    if(currPlayer == "X")currPlayer = "0";
    else currPlayer="X"
    gamerinfo.innerText = `Current Player: ${currPlayer}`;
}

//new game dabane par new game chalo
newbtngame.addEventListener("click",initgame);

function checkwin()
{
    let answer="";
    winningpos.forEach((pos)=>
    {
        if((gamegrid[pos[0]]!==""||
        gamegrid[pos[1]]!==""||
        gamegrid[pos[2]]!=="")
        &&
        ((gamegrid[pos[0]]===gamegrid[pos[1]])&&(gamegrid[pos[1]]===gamegrid[pos[2]])))
        {
            if(gamegrid[pos[0]]==="X")
                answer = "X"
            else
                answer="0";
            
            boxes.forEach((box)=>
            {
             box.style.pointerEvents="none";   
             console.log("chala");
            });
            
            boxes[pos[0]].classList.add("win");
            boxes[pos[1]].classList.add("win");
            boxes[pos[2]].classList.add("win");
        }
    }

    );
    console.log(answer);
    if(answer!="")
    {
        gamerinfo.innerText=`Winner Player -${answer}`;
        newbtngame.classList.add("active");
   return ;
    }
//when there is no winner

let emptycnt = 0;
gamegrid.forEach((box)=>
{
    if(box!="")emptycnt++;
});
if(emptycnt === 9)
{
    gamerinfo.innerText ="Game Tied "+String.fromCodePoint(0X1F635);
    newbtngame.classList.add("active");
}

}


