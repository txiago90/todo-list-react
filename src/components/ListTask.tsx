import { Trash } from 'phosphor-react'
import { ITask } from '../App'
import './ListTask.css'

interface Props {
  task: ITask
  onDelete: (taskId: string) => void
  onComplete: (taskId: string) => void
}

export function ListTask({ task, onDelete, onComplete }: Props) {

  return (
    <label className="custom-radio">
      <input type="checkbox"/>

      <div 
        className="radio-btn"
        onClick={() => onComplete(task.id)}
      >                                                          
        <span className="check-icon">
           <span className="icon" />                                                
        </span>

        <p className={task.isCompleted ? 'textCompleted' : 'task' }>
          {task.title}</p>
      </div>  

      <button 
          title='Deletar tarefa' 
          className='deleteTask'
          onClick={() => onDelete(task.id)}>
            <Trash 
              size={24} 
              weight="fill"
            />
        </button>
    </label>  
  )
}