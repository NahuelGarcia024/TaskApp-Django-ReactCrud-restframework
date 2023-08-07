import { useEffect, useState } from "react"
import { getAllTasks } from "../api/tasks.api"
import { TaskCard } from "./TaskCard";

export function TaskList() {

    const [tasks, setTasks] = useState([]);
      
        
      useEffect(() => {
       async function loadTasks() {
            const rest = await getAllTasks();
            setTasks(rest.data);
        }
        loadTasks();
 },[]);

  return (
    <div className="grid grid-cols-3 gap-3">
    {tasks.map(task => (

        <TaskCard key={task.id} task={task}/>
        
            
        ))}
    
    
    
    </div>
  )
  


}
