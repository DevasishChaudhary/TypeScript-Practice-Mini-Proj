import { useState } from "react"
import PropChild from "./PropChild";


const PropParent = () => {
    const [count1, setCount1]= useState<number>(0);

    function increase(){
        setCount1(count1+1);
    }

  return (
    <div>
        <PropChild count1={count1} increase={increase}/>

    </div>
  )
}

export default PropParent