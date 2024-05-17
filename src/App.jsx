import { Task } from "./components/Task"

const tasks = [
 {  id: 1,
    title: "Estudar ",
    inCompleted: 'false'
  },
 {  id: 2,
    title: "Estudar ",
    inCompleted: 'false'
  }
]


export function App() {
  return (
   <main>
      <h1>Todo App</h1>
      <input type="text" />
      <button>Add</button>
      {tasks.length > 0 && tasks.map(item => (
        <Task key={item.id} task={item} />
      ))}

      {!tasks.length && <p>Nenhuma tarefa ainda... 😕 </p>}
   </main>
  )
}
