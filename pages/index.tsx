/* eslint-disable max-len */
import React, { useState, useEffect } from 'react'

interface Task {
  name: string
  completed: boolean
}

type FilterType = 'all' | 'completed' | 'current'

const Home: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([])
  const [inputValue, setInputValue] = useState<string>('')
  const [filter, setFilter] = useState<'all' | 'completed' | 'current'>('all')
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([])

  useEffect(() => {
    const updateFilteredTasks = (): void => {
      let filtered
      if (filter === 'completed') {
        filtered = tasks.filter((task) => task.completed)
      } else if (filter === 'current') {
        filtered = tasks.filter((task) => !task.completed)
      } else {
        filtered = tasks
      }
      setFilteredTasks(filtered)
    }

    updateFilteredTasks()
  }, [tasks, filter])

  const addTask = (): void => {
    if (inputValue.trim().length > 0) {
      setTasks([...tasks, { 'name': inputValue, 'completed': false }])
      setInputValue('')
    }
  }

  const toggleCompletion = (index: number): void => {
    const updatedTasks = [...tasks]
    updatedTasks[index].completed = !updatedTasks[index].completed
    setTasks(updatedTasks)
  }

  const completedCount = tasks.filter((task) => task.completed).length
  const uncompletedCount = tasks.length - completedCount

  const data: { name: FilterType, value: string, count: number }[] = [
    {
      'name': 'all',
      'value': 'All',
      'count': tasks?.length,
    },
    {
      'name': 'completed',
      'value': 'Completed',
      'count': completedCount,
    },
    {
      'name': 'current',
      'value': 'Current',
      'count': uncompletedCount,
    },
  ]

  return (
    <div className="p-4 h-screen w-full gap-12 flex flex-col justify-center items-center">
      <div className="flex justify-center items-center gap-3">
        <input
          type="text"
          className="border rounded-lg min-w-[250px] border-gray-300 px-3 py-2 mr-2"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="Enter task"
        />
        <button
          className="bg-green-500 rounded-lg hover:bg-green-600 text-white px-4 py-2"
          onClick={addTask}
        >
          Add Task
        </button>
      </div>
      <div className="md:flex">
        <ul className="flex-column space-y space-y-4 text-sm font-medium text-gray-400 md:me-4 mb-4 md:mb-0">
          {data.map(({ name, value, count }) => <li>
            <div
              className={`flex relative justify-center cursor-pointer items-center px-4 py-3 rounded-lg active w-full ${
                filter === name ? 'bg-green-500 text-white' : 'text-green-500 bg-white'
              }`}
              aria-current="page"
              onClick={() => setFilter(name)}
            >
              {value}
              <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2">
                {count}
              </div>
            </div>
          </li>)}
        </ul>
        <div className="p-6 bg-gray-50 min-w-[400px] text-medium text-gray-500 rounded-lg w-full">
          {filteredTasks.map((task, index) => <li
            key={index}
            className={`cursor-pointer ${
              task.completed ? 'line-through text-gray-500' : ''
            }`}
            onClick={() => toggleCompletion(index)}
          >
            {task.name}
          </li>)}
        </div>
      </div>
    </div>
  )
}

export default Home
