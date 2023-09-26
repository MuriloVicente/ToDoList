import { useState, KeyboardEvent } from "react"

type Props = {
    onEnter: (taskName: string) => void
}

export default function AddArea({ onEnter }: Props) {
    const [inputText, setInputText] = useState('')

    const handleKeyUp = (e: KeyboardEvent) => {
        if (e.code === 'Enter' && inputText !== '') {
            onEnter(inputText)
            setInputText('')
        }
    }

    return (
        <div className="border border-slate-700 rounded-lg p-3 my-5 flex mx-4 md:mx-0">
            <span className="mr-2">➕</span>
            <input
                type="text"
                placeholder="Adicione uma tarefa"
                className="bg-transparent outline-none flex-1 text-lg"
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                onKeyUp={handleKeyUp} />
        </div>
    )
}