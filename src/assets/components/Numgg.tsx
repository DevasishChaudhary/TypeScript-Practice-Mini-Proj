import { useState } from "react"


const Numgg = () => {
    const [num, setNum]= useState<number>(0);
    const [randNum, setRandNum]= useState<number>(0);
    const [display, setDisplay]= useState<string>("");
    



    function handler(e:React.ChangeEvent<HTMLInputElement>){
        setNum(Number(e.target.value));
    }

    function start(){
        setRandNum(Math.floor(Math.random()*101));
       
    }

    function check(){
        if(num===randNum){
            setDisplay(`You are correct the answer is ${randNum}`);
        }
        else if(num > randNum){
            setDisplay('Too High');

        }
        else if(num< randNum){
            setDisplay('Too Low');
        }
    }

    function reset(){
        setDisplay("");
        setNum(0);
    }

    

  return (
    <div>
        <input type="text" onChange={handler} value={num}/>
        {randNum?"":<button onClick={start}>Start</button>}
        <button onClick={check}>Check</button>
        <button  onClick={reset}>Reset</button>
        <h2>{display}</h2>
    </div>
  )
}

export default Numgg
