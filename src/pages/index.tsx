import { useState } from "react"
import ListItem from "@/components/ListItem"
import AddArea from "@/components/AddArea"
import { Item } from "@/types/Item"

export default function Home() {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Comprar pão', done: false },
    { id: 2, name: 'Ir a academia', done: false }
  ])

  const handleAddTask = (taskName: string) => {
    let newList = [...list]
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    })
    setList(newList)
  }

  return (
    <div className={`
      bg-slate-900
      h-screen
    `}>
      <div className="m-auto max-w-5xl text-white p-3">
        <h1 className="text-center text-5xl font-semibold border-b-[1px] border-[#444] pb-5">
          Lista de Tarefas
        </h1>
        
        <AddArea onEnter={handleAddTask} />

        {list.map((item, index) => (
          <div><ListItem key={index} item={item} /></div>
        ))}
      </div>
    </div>
  )
}
