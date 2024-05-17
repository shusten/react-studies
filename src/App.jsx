import { useRef, useState } from "react"
import { Task } from "./components/Task"

const data = []


export function App() {
const inputRef = useRef(null)
const [tasks, setTasks] = useState(data)

function handleAddTask() {
  const newTask = {
    id: tasks.length + 1,
    title: inputRef.current.value,
    isCompleted: false
  }

  setTasks([...tasks, newTask])

  inputRef.current.value = ''
}

  return (
   <main>
      <h1>Todo App</h1>
      <input placeholder="Nome da tarefa" ref={inputRef} type="text" />

      <button onClick={handleAddTask}>Add</button>

      {tasks.length > 0 && tasks.map(item => (
        <Task key={item.id} task={item} />
      ))}

      {!tasks.length && <p>Nenhuma tarefa ainda... 😕 </p>}
   </main>
  )
}
