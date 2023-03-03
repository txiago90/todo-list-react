import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { Tasks } from './components/Tasks'

import './global.css'

const LOCAL_STORAGE_KEY = "todo:savedTask"

export interface ITask {
  id: string,
  title: string,
  isCompleted: boolean
}

export function App() {
  const [tasks, setTasks] = useState<ITask[]>([])

  function loadSavedTasks() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (saved) {
      setTasks(JSON.parse(saved))
    }
  }

  useEffect(() => {
    loadSavedTasks()
  }, [])

  function setTaskAndSave(newTasks: ITask[]) {
    setTasks(newTasks)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks))
  }

  function addTask(taskTitle: string) {
    setTaskAndSave([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false
      }
    ])
  }

  function deleteTaskById(taskId: string) {
    const newTasks = tasks.filter((task) => task.id != taskId)
    setTaskAndSave(newTasks)
  }

  function taskCompletedById(taskId: string) {
    const newTasks = tasks.map(task => {
      if(task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }
      return task
    })
    setTaskAndSave(newTasks)
  }

  return (
    <> 
      <Header onAddTask={addTask} />
      <Tasks tasks={tasks} onDelete={deleteTaskById} onComplete={taskCompletedById}/>
    </>
  )
}


