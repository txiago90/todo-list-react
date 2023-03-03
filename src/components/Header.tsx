import './Header.css'
import RocketLogo from '../assets/rocket.svg'
import { ListPlus, Plus, PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react'

interface Props {
  onAddTask: (taskTitle: string) => void
}

export function Header({ onAddTask }: Props) {
  const [title, setTitle] = useState("")

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    onAddTask(title)
    setTitle("")
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value)
  }  

  return (
    <header className='header'>
      <img src={RocketLogo} alt="" />
      <h1>to<span>do</span></h1>

      <form onSubmit={handleCreateNewTask} className='newTaskForm'>
        <ListPlus size={24}/>
        <input 
          type="text" 
          placeholder='Adicione uma nova tarefa'
          onChange={onChangeTitle}
          value={title}
          required
        />
        <button type='submit' disabled={title.length === 0}>
          <span>Criar</span>
          <PlusCircle
            size={24}
            weight="fill"
          />
        </button>
      </form>
    </header>
  )
}