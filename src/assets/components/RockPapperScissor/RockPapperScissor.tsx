import { useState } from "react"

type Choice= 'rock'|'papper'|'scissor';

const option:Choice[]=['rock','papper','scissor'];


const RockPapperScissor = () => {
    const [ushow, setUshow]= useState<Choice|''>('');
    const [cshow, setCshow]= useState<Choice|''>();
    const [display, setDisplay] =useState<string>('');
    const [userwin, setUserwin]= useState<number>(0);
    const [compwin, setCompwin]= useState<number>(0);


    function calculate(){
    if(!ushow) return alert(`Must choose any Choice`);

    const computerPick= computerChoice();

    if(ushow===computerPick){
        setDisplay(`Game is Draw`);
    }
    else{
        if((ushow==="rock" && computerPick==="scissor") ||
           (ushow==="papper" && computerPick==="rock") ||
           (ushow==="scissor" && computerPick==="papper") ){
            setDisplay('You Win')
            setUserwin(userwin+1);
        }
        else{
            setDisplay('Computer Win')
            setCompwin(compwin+1);
        }
    }
}

    function computerChoice():Choice{
        let compChoice= option[(Math.floor(Math.random() * option.length))];
        setCshow(`${compChoice}`);
        return compChoice;
    }

    function userChoice(userChoice:Choice):void{
        setUshow(userChoice);
    }
  return (
    <div>
        <h3>You:{ushow}</h3>
        <h3>Computer:{cshow}</h3>
        <div>
        <button onClick={()=>userChoice("rock")}>Rock</button>
        <button  onClick={()=>userChoice("papper")}>Papper</button>
        <button onClick={()=>userChoice('scissor')}>Scissor</button>
        <button onClick={calculate}>Play</button>
        </div>
        <h1>Display:{display}</h1>
        <p>UserWin:{userwin}</p>
        <p>CompWin:{compwin}</p>
        
    </div>
  )
}

export default RockPapperScissor