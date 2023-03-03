import { ListTask } from './ListTask'
import './Tasks.css'
import { ITask } from '../App'
import ClipBoard  from '../assets/clipboard.svg'

interface Props {
  tasks: ITask[]
  onDelete: (taskId: string) => void
  onComplete: (taskId: string) => void
}

export function Tasks({ tasks, onDelete, onComplete }: Props) {
  const tasksQuantity = tasks.length
  const completedTasks = tasks.filter((task) => task.isCompleted).length

  return (
    <section>
      <header className="tasksInfo">
        <div>
          <p>Tarefas criadas</p>
          <span>{tasksQuantity}</span>
        </div>

        <div>
          <p>Concluídas</p>
          <span>{completedTasks} de {tasksQuantity}</span>
        </div>
      </header>

      <div className="listTask">
        {tasks.map(task => {
            return (
              <ListTask 
                key={task.id}
                task={task} 
                onDelete={onDelete}
                onComplete={onComplete}
              />
            )
          })}
          
        {tasks.length <= 0 && (
          <div className='empty'>
            <img src={ClipBoard} />
            <div>
              <p>Você ainda não tem tarefas cadastradas</p>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          </div>
          )}
      </div>     
    </section>
  )
}