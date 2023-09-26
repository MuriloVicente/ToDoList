import { Item } from "@/types/Item"
import { useEffect, useState } from "react"

type Props = {
    item: Item
    onTaskDone: (taskId: number, isDone: boolean) => void
}

export default function ListItem({ item, onTaskDone }: Props) {
    const [isCkecked, setIsChecked] = useState(item.done)

    useEffect(() => {
        setIsChecked(item.done)
    }, [item.done])

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked
        setIsChecked(isChecked)
        onTaskDone(item.id, isChecked)
    }

    return (
        <div className={`
            flex items-center
            bg-slate-800
            p-3
            mb-3
            rounded-lg
            mx-4 md:mx-0
            shadow-sm shadow-zinc-600
            bg-gradient-to-r from-slate-800 to-slate-600
        `}>
            <input className="w-6 h-6 mr-3"
                type="checkbox"
                checked={isCkecked}
                onChange={handleCheckboxChange} />
            <label className={`
                text-slate-300 ${isCkecked ? 'line-through' : ''}
            `}>{item.name}
            </label>
        </div>
    )
}