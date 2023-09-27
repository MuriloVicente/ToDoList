import { useEffect, useState } from "react"
import ListItem from "@/components/ListItem"
import AddArea from "@/components/AddArea"
import { Item } from "@/types/Item"
import { Roboto } from 'next/font/google'


const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})


export default function Home() {

  // Declara um estado "list" que irá armazenar a lista de tarefas.
  const [list, setList] = useState<Item[]>([])

  // Função para adicionar uma nova tarefa à lista.
  const handleAddTask = (taskName: string) => {
    // Cria um novo objeto de tarefa.
    const newItem: Item = {
      id: list.length + 1,
      name: taskName,
      done: false,
    }

    // Cria uma nova lista com a nova tarefa adicionada.
    const newList = [...list, newItem]

    // Atualiza o estado "list" com a nova lista.
    setList(newList)

    // Armazena a lista no armazenamento local (localStorage).
    localStorage.setItem("taskList", JSON.stringify(newList))
  }

  // Função para marcar uma tarefa como concluída.
  const handleTaskDone = (taskId: number) => {
    // Mapeia a lista atual e atualiza o estado de "done" da tarefa correspondente.
    const updatedList = list.map((item) =>
      item.id === taskId ? { ...item, done: !item.done } : item
    )

    // Atualiza o estado "list" com a lista atualizada.
    setList(updatedList)

    // Armazena a lista atualizada no armazenamento local (localStorage).
    localStorage.setItem("taskList", JSON.stringify(updatedList))
  }

  // Carrega a lista de tarefas do localStorage quando o componente é montado.
  useEffect(() => {
    const storedList = localStorage.getItem("taskList")
    if (storedList) {
      // Atualiza o estado "list" com a lista armazenada.
      setList(JSON.parse(storedList))
    }
  }, [])


  return (
    <div className={`
      bg-slate-900
      h-screen
      ${roboto.className}
    `}>
      <div className="m-auto max-w-5xl text-white p-3">
        <h1 className={`
          text-center font-semibold 
          border-b-[1px] border-slate-700 
          pb-5 mb-16
          text-4xl
        `}>
          Lista de Tarefas
        </h1>

        {/* Renderiza o componente AddArea para adicionar novas tarefas. */}
        <AddArea onEnter={handleAddTask} />

        {/* Mapeia a lista de tarefas e renderiza o componente ListItem para cada uma. */}
        {list.map((item, index) => (
          <div key={index}>
            <ListItem key={index} item={item} onTaskDone={handleTaskDone} />
          </div>
        ))}
      </div>
    </div>
  )
}
