import { Item } from "@/types/Item"
import { useState } from "react"

type Props = {
    item: Item
}

export default function ListItem({ item }: Props) {
    const [isCkecked, setIsChecked] = useState(item.done)

    return (
        <div className={`
            flex items-center
            bg-slate-800
            p-3
            mb-3
            rounded-lg
        `}>
            <input className="w-6 h-6 mr-3"
                type="checkbox"
                checked={isCkecked}
                onChange={e => setIsChecked(e.target.checked)} />
            <label className={`
                text-slate-300 ${isCkecked ? 'line-through' : ''}
            `}>{item.name}</label>
        </div>
    )
}