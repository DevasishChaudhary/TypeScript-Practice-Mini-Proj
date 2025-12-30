type propsChild={
    count1:number;
    increase: ()=>void
}
const PropChild = ({count1,increase}:propsChild) => {
  return (
    <div>
        <h1>{count1}</h1>
        <button onClick={increase}>Increase</button>
        

    </div>
  )
}

export default PropChild