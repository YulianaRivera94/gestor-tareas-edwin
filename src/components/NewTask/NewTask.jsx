import { useContext, useRef, useState } from 'react';
import { TaskContext } from '../Context/Context';
import { v4 as uuidv4 } from 'uuid';
import './NewTask.css'

export const NewTask = () => {

  const context = useContext(TaskContext)

  const [titleTask, setTitleTask] = useState ('')
  const [descriptionTask, setDescriptionTask ] = useState ('')

  const txtTitle = useRef('')
  const txtDescripcion = useRef('')

  const handleTitleTask = (event) => {setTitleTask(event.target.value) }
  const handleDescriptionTask = (event) => {setDescriptionTask(event.target.value) }

  const handleCreateTask = (event) => {
    event.preventDefault()
    const newTask = {
      id: uuidv4(),
      title: titleTask,
      description: descriptionTask,
      status: false
    }
    context.setTasks([...context.tasks,newTask])
    context.setFilteredTasks([...context.tasks,newTask])

    txtTitle.current.value =''
    txtDescripcion.current.value =''

  }

  return (
  <form className='frm-task'>
    <fieldset> 
      <label htmlFor="">Titulo De La tarea</label>
      <input  ref={txtTitle} onChange={handleTitleTask} id='txt-title' placeholder='EJ:Aseo ambiente'  type="text" maxLength={100} />
    </fieldset>
    <fieldset>
      <label htmlFor="">Description</label>
      <input ref={txtDescripcion} onChange={handleDescriptionTask} id='txt-descripcion' placeholder='Ej: Realizar aseo al ambiente' type="text" />
    </fieldset>
    <button  onClick={handleCreateTask} className='btn-new-task' >Crear nueva tarea </button>
  </form>
  )
}

