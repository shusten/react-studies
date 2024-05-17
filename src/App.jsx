const data = [
  { 
    id: 1,
    title: 'Meu primeiro todo',
    isCompleted: 'false',
  },
  { 
    id: 2,
    title: 'Meu primeiro todo',
    isCompleted: 'false',
  },
  { 
    id: 3,
    title: 'Meu primeiro todo',
    isCompleted: 'false',
  },
]


export function App() {
  return (
   <main>
      <h1>Todo App</h1>
      <input type="text" />
      <button>Add</button>
      {data.map(item => (
        <p key={item.id}>{item.id}. {item.title}</p>
      ))}
   </main>
  )
}
