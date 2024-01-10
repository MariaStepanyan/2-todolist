import React, { useState } from 'react'
import './App.css'
import { Todolist } from './Todolist'

export type FilterValuesType = 'All' | 'active' | 'completed'

function App() {
  let [tasks, setTasks] = useState([
    { id: 1, title: 'HTML&CSS', isDone: true },
    { id: 2, title: 'JS', isDone: true },
    { id: 3, title: 'ReactJS', isDone: false },
    { id: 4, title: 'Rest API', isDone: false },
    { id: 5, title: 'GraphQL', isDone: false },
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

  function removeTask(id: number) {
    let filteredTasks = tasks.filter((task) => task.id !== id)
    setTasks(filteredTasks)
  }

  return (
    <div className="App">
      <Todolist
        title="What to learn"
        tasks={taskForTodoList}
        removeTask={removeTask}
        changeFilter={changeFilter}
      />
    </div>
  )
}

export default App