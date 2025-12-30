import  { useState } from 'react'

const Counter = () => {
    const [count,setCount]= useState<number>(0);

    function increase(){
        setCount(count+1);
    }

    function decrease(){
      setCount(count-1);
    }

    function reset(){
      setCount(0);
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={reset}>Reset</button>

        

    </div>
  )
}

export default Counter