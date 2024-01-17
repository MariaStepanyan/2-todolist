import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import { FilterValuesType } from './App'

type TaskType = {
  id: string
  title: string
  isDone: boolean
}

type PropsType = {
  title: string
  tasks: Array<TaskType>
  removeTask: (taskId: string) => void
  changeFilter: (value: FilterValuesType) => void
  addTask: (title: string) => void
}

export function Todolist(props: PropsType) {
  const [newtaskTitle, setNewtaskTitle] = useState('')

  const onChangeNewTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewtaskTitle(e.currentTarget.value)
  }

  const addtask = () => {
    props.addTask(newtaskTitle)
    setNewtaskTitle('')
  }

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addtask()
    }
  }

  const onAllClickHandler = () => props.changeFilter('All')
  const onActiveClickHandler = () => props.changeFilter('active')
  const onCompletedClickHandler = () => props.changeFilter('completed')

  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input
          value={newtaskTitle}
          onChange={onChangeNewTitleHandler}
          onKeyPress={onKeyPressHandler}
        />
        <button onClick={addtask}>+</button>
      </div>

      <ul>
        {props.tasks.map((task) => {
          const onRemoveHandler = () => {
            props.removeTask(task.id)
          }
          return (
            <li key={task.id}>
              <input type="checkbox" checked={task.isDone} />{' '}
              <span>{task.title}</span>
              <button onClick={onRemoveHandler}>✖️</button>
            </li>
          )
        })}
      </ul>

      <div>
        <button onClick={onAllClickHandler}>All</button>
        <button onClick={onActiveClickHandler}>Active</button>
        <button onClick={onCompletedClickHandler}>Completed</button>
      </div>
    </div>
  )
}
