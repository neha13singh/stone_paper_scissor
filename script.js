let userscore=0;
let comscore=0;
let userchoice;
let computerchoice;
let stone=document.querySelector(".choice1");
stone.onclick=()=>{
//    console.log("stone");
   userchoice="stone";
   comch();
   console.log("userchoice:", userchoice);
   console.log("comchoice: ", comchoice);
   play();
}
let paper=document.querySelector(".choice2");
paper.onclick=()=>{
//    console.log("paper");
   userchoice="paper";
   comch();
   console.log("userchoice:", userchoice);
   console.log("comchoice: ", comchoice);
   play();
}
let scissor=document.querySelector(".choice3");
scissor.onclick=()=>{
//    console.log("scissor");
   userchoice="scissor";
   comch();
   console.log("userchoice:", userchoice);
   console.log("comchoice: ", comchoice);
   play();
}
let arr=["stone", "paper", "scissor"];
let comch=()=>{
    let rand=Math.floor(Math.random() * 3);
    comchoice=arr[rand];
}
// let userwin=false;
let play=()=>{
    // let userwin=false;
    let uscore=document.querySelector(".userscore");
    let cscore=document.querySelector(".comscore");
    let message=document.querySelector(".message");
    
    if(userchoice==comchoice)
    {
      message.innerText=`DRAW, computer: ${comchoice}, user: ${userchoice}`;
      message.style.backgroundColor="rgb(203, 203, 218)";
      message.style.color=" rgb(91, 73, 107)";
    }
    else if(comchoice==="stone")
    {
      if(userchoice==="paper")
      {
        message.innerText=`WIN,\tcomputer:\t${comchoice},\tuser:\t${userchoice}`;
        message.style.backgroundColor="green";
        message.style.color="white";
        userscore++;
        uscore.innerText=userscore;
        console.log(cscore.innerText);
      }
      else{
        message.innerText=`LOOSE,\tcomputer:\t${comchoice},\tuser:\t${userchoice}`;
        message.style.backgroundColor="red";
        message.style.color="white";
        comscore++;
        cscore.innerText=comscore;
        console.log(cscore.innerText);
      }
    }
    else if(comchoice==="paper")
        {
          if(userchoice==="scissor")
          {
            message.innerText=`WIN,\tcomputer:\t${comchoice},\tuser:\t${userchoice}`;
            message.style.backgroundColor="green";
            message.style.color="white";
            userscore++;
            uscore.innerText=userscore;
            console.log(uscore.innerText);
          }
          else{
            message.innerText=`LOOSE,\tcomputer:\t${comchoice},\tuser:\t${userchoice}`;
            message.style.backgroundColor="red";
            message.style.color="white";
            comscore++;
            cscore.innerText=comscore;
            console.log(cscore.innerText);
          }
        }
        else if(comchoice==="scissor")
            {
              if(userchoice==="stone")
              {
                message.innerText=`WIN,\tcomputer:\t${comchoice},\tuser:\t${userchoice}`;
                message.style.backgroundColor="green";
                message.style.color="white";
                userscore++;
                uscore.innerText=userscore;
                console.log(uscore.innerText);
              }
              else{
                message.innerText=`LOOSE,\tcomputer:\t${comchoice},\tuser:\t${userchoice}`;
                message.style.backgroundColor="red";
                message.style.color="white";
                comscore++;
                cscore.innerText=comscore;
                console.log(cscore.innerText);
              }
            }
}
