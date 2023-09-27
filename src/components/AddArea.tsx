import { useState, KeyboardEvent, FormEvent } from "react"

// Define um tipo Props que descreve as propriedades esperadas pelo componente AddArea.
type Props = {
    onEnter: (taskName: string) => void // Uma função para adicionar uma nova tarefa.
}


export default function AddArea({ onEnter }: Props) {
    
    // Define um estado local "inputText" para armazenar o texto inserido pelo usuário.
    const [inputText, setInputText] = useState('')

    // Função para lidar com o evento de pressionar uma tecla (Keyup).
    const handleKeyUp = (e: KeyboardEvent) => {
        if (e.code === 'Enter' && inputText !== '') {
            // Verifica se a tecla pressionada foi "Enter" e se o campo de texto não está vazio.
            // Chama a função "onEnter" para adicionar uma nova tarefa com o texto inserido.
            onEnter(inputText)
            setInputText('') // Limpa o campo de texto após a adição da tarefa.
        }
    }

    // Função para lidar com o envio do formulário (submit).
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault() // Evita a recarga da página ao pressionar "Enter" dentro do formulário.
        if (inputText !== "") {
            // Verifica se o campo de texto não está vazio.
            // Chama a função "onEnter" para adicionar uma nova tarefa com o texto inserido.
            onEnter(inputText)
            setInputText("") // Limpa o campo de texto após a adição da tarefa.
        }
    }

    // Renderiza o componente AddArea que permite aos usuários adicionar novas tarefas.
    return (
        <form onSubmit={handleSubmit}>
            <div className="border border-slate-700 rounded-lg p-3 my-5 flex mx-4 md:mx-0">
                <span className="mr-2 flex items-center">➕</span>
                {/* Renderiza um campo de entrada de texto para inserir o nome da nova tarefa. */}
                <input
                    type="text"
                    placeholder="Adicione uma tarefa"
                    className="bg-transparent outline-none flex-1 text-lg"
                    value={inputText} // Define o valor do campo de acordo com o estado "inputText".
                    onChange={e => setInputText(e.target.value)} // Atualiza o estado "inputText" ao digitar.
                    onKeyUp={handleKeyUp} // Liga a função de tratamento de teclas pressionadas.
                />
                {/* Renderiza um botão para adicionar a tarefa ao pressionar o botão "Adicionar". */}
                <button type="submit" 
                    className={`
                        bg-slate-700
                        p-2 px-2
                        rounded-md
                        text-sm
                    `}>
                    Adicionar
                </button>
            </div>
        </form>
    )
}
