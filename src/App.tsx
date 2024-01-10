import React, { useState } from 'react'
import './App.css'
import { Todolist } from './Todolist'
import {  v1 as uuidv1 } from 'uuid'

export type FilterValuesType = 'All' | 'active' | 'completed'

function App() {
  let [tasks, setTasks] = useState([
    { id: uuidv1(), title: 'HTML&CSS', isDone: true },
    { id: uuidv1(), title: 'JS', isDone: true },
    { id: uuidv1(), title: 'ReactJS', isDone: false },
    { id: uuidv1(), title: 'Rest API', isDone: false },
    { id: uuidv1(), title: 'GraphQL', isDone: false },
  ])

  let [filter, setFilter] = useState<FilterValuesType>('All')

  let taskForTodoList =
    filter === 'active'
      ? tasks.filter((task) => !task.isDone)
      : filter === 'completed'
      ? tasks.filter((task) => task.isDone)
      : tasks

  function changeFilter(value: FilterValuesType) {
    setFilter(value)
  }

  function removeTask(id: string) {
    let filteredTasks = tasks.filter((task) => task.id !== id)
    setTasks(filteredTasks)
  }

  function addTask(title: string) {
    let newTask =  {id: uuidv1(), title: title, isDone: false }
    let newTasks = [newTask, ...tasks]
    setTasks(newTasks)
  }

  return (
    <div className="App">
      <Todolist
        title="What to learn"
        tasks={taskForTodoList}
        removeTask={removeTask}
        changeFilter={changeFilter}
        addTask = {addTask}
      />
    </div>
  )
}

export default App
function v1(): any {
    throw new Error('Function not implemented.')
}

