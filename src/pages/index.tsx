import { useEffect, useState } from "react"
import ListItem from "@/components/ListItem"
import AddArea from "@/components/AddArea"
import { Item } from "@/types/Item"

export default function Home() {
  const [list, setList] = useState<Item[]>([

  ])

  const handleAddTask = (taskName: string) => {
    const newItem: Item = {
      id: list.length + 1,
      name: taskName,
      done: false,
    }

    const newList = [...list, newItem]
    setList(newList)

    localStorage.setItem("taskList", JSON.stringify(newList))

  }

  const handleTaskDone = (taskId: number) => {
    const updatedList = list.map((item) =>
      item.id === taskId ? { ...item, done: !item.done } : item
    )
    setList(updatedList)

    localStorage.setItem("taskList", JSON.stringify(updatedList))
  }

  useEffect(() => {
    const storedList = localStorage.getItem("taskList")
    if (storedList) {
      setList(JSON.parse(storedList))
    }
  }, [])

  return (
    <div className={`
      bg-slate-900
      h-screen
    `}>
      <div className="m-auto max-w-5xl text-white p-3">
        <h1 className="text-center text-5xl font-semibold border-b-[1px] border-slate-700 pb-5">
          Lista de Tarefas
        </h1>

        <AddArea onEnter={handleAddTask} />

        {list.map((item, index) => (
          <div>
            <ListItem key={index} item={item} onTaskDone={handleTaskDone} />
          </div>
        ))}
      </div>
    </div>
  )
}
