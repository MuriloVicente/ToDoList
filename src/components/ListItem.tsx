import { Item } from "@/types/Item"
import { useEffect, useState } from "react"

// Define um tipo Props que descreve as propriedades esperadas pelo componente ListItem.
type Props = {
    item: Item // Uma tarefa do tipo Item
    onTaskDone: (taskId: number, isDone: boolean) => void // Uma função para marcar uma tarefa como concluída
}


export default function ListItem({ item, onTaskDone }: Props) {

    // Define um estado local "isCkecked" para controlar o estado de seleção da tarefa.
    const [isCkecked, setIsChecked] = useState(item.done)

    // Um efeito colateral que atualiza o estado "isCkecked" quando o estado "done" da tarefa muda.
    useEffect(() => {
        setIsChecked(item.done)
    }, [item.done])

    // Função para lidar com a mudança na caixa de seleção (checkbox) da tarefa.
    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked // Verifica se a caixa de seleção está marcada ou desmarcada.
        setIsChecked(isChecked) // Atualiza o estado local "isCkecked" com o novo valor.
        onTaskDone(item.id, isChecked) // Chama a função "onTaskDone" para atualizar o estado da tarefa.
    }

    // Renderiza o componente ListItem que exibe uma tarefa na interface do usuário.
    return (
        <div className={`
            flex items-center
            bg-slate-800
            p-3
            mb-3
            rounded-lg
            mx-4 md:mx-0
            bg-gradient-to-r from-slate-800 to-slate-700
        `}>
            {/* Renderiza uma caixa de seleção (checkbox) para marcar a tarefa como concluída ou não. */}
            <input className="w-6 h-6 mr-3"
                type="checkbox"
                checked={isCkecked} // Define o estado da caixa de seleção com base em "isCkecked".
                onChange={handleCheckboxChange} // Define a função de tratamento de mudança.
            />
            {/* Renderiza o nome da tarefa com um efeito de riscado (line-through) se estiver concluída. */}
            <label className={`
                text-slate-300 ${isCkecked ? 'line-through' : ''}
            `}>{item.name}
            </label>
        </div>
    )
}
