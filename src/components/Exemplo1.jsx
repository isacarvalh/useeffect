// useEffect => função de efeito colateral. É executada sempre que a página for carregada e também pode estar vinculada a mudanças de estados

import { useEffect, useState } from "react"

export function Exemplo1() {
    const [numero, setNumero] = useState(0)


    useEffect(() => {
        console.log(`O estado do número mudou. O número agora é ${numero}`)
    }, [numero])

    return (
        <section>
            <h2>Exemplo 1</h2>

            <div>
                <h3>Número: {numero}</h3>
                <button onClick={() => setNumero(numero + 1)}>Aumentar</button>
            </div>
        </section>
    )
}