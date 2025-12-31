import { useState, type ChangeEvent } from "react"


const TodoList = () => {
    const [tasks, setTasks]= useState<string[]>([]);
    const [newTasks, setNewTasks]= useState<string>('');


    function inputHandler(event:ChangeEvent<HTMLInputElement>){
        setNewTasks(event.target.value);
    }

    function addTask():void{
        if(!newTasks.trim()) return;

        setTasks([...tasks, newTasks]);
        setNewTasks('');
    }

    function deleteTasks(index:number):void{
        const deleteConfirm= confirm("Are you sure you want to delete the task");

        if(deleteConfirm){
            const temp= [...tasks];
            temp.splice(index, 1);
            setTasks(temp);
        }
    }

    function moveUp(index:number):void{
        const tempU= [...tasks];
        [tempU[index],tempU[index-1]]= [tempU[index-1], tempU[index]];
        setTasks(tempU);

    }

    function moveDown(index:number):void{
        const tempD= [...tasks];
        [tempD[index], tempD[index+1]]= [tempD[index+1], tempD[index]];
        setTasks(tempD);
    }

  return (
    <div>
        <div className="flex justify-center gap-2">
            <input type="text" placeholder="Enter your tasks" onChange={inputHandler} value={newTasks} className="border"/>
            <button onClick={addTask} className="bg-amber-500 border">Add Task</button>
        </div>

        <ol>
            {tasks.map((task, index) =>(
                <li key={index} className="flex justify-center pb-4 gap-3">
                    <span>{task}</span>
                    <button onClick={()=>deleteTasks(index)} className="border text-red-600 font-bold">Delete</button>
                    <button onClick={()=>moveUp(index)} className="border text-green-600 font-bold">Move Up</button>
                    <button onClick={()=>moveDown(index)} className="border text-blue-600 font-bold">Move Down</button>
                </li>
            ))}
        </ol>

    </div>
  )
}

export default TodoList