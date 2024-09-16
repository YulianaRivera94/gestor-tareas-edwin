import  {  createContext, useState } from "react"
import { v4 as uuidv4 } from 'uuid';


export const TaskContext = createContext ()
const tsk = [

  { id: uuidv4(), title:'Tarea de ejemplo 1', description: 'Descripción pendiente1',status:false},
  { id: uuidv4(), title:'Tarea de ejemplo 2', description: 'Descripción pendiente2',status:false},
  { id: uuidv4(), title:'Tarea de ejemplo 3', description: 'Descripción pendiente3',status:false},
  { id: uuidv4(), title:'Tarea de ejemplo 4', description: 'Descripción pendiente4',status:false}
]

export const TasksProvider = ({ children }) => {

  const [ tasks, setTasks ] = useState(tsk)
  const [filteredTasks, setFilteredTasks] = useState(tsk)
  const [pendingTasks, setPendingTasks] = useState(0)
  const [doneTasks, setDoneTasks]= useState(0);

  const updateTaskStatus = (taskId, newStatus) => {
    setTasks(prevTasks => 
      prevTasks.map(task =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  }

  return (
    <TaskContext.Provider value={{
       tasks,
       setTasks,
       pendingTasks,
       setPendingTasks,
       doneTasks,
       setDoneTasks,
       updateTaskStatus,
       filteredTasks,
       setFilteredTasks,
       }}>
        {children}
      </TaskContext.Provider>
)  
}