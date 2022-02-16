import { useState } from "react";
import Layout from "../components/Layout";

export default function Estado() {
    const [numero, setNumero] = useState(0) // useState() faz parte de um grupo de funções chamado 'React Hooks'

    // Nunca se altera o valor diretamente, sempre a partir de uma função para altera-lo.
    function incrementar() {
        setNumero(numero + 1)
    }

    return (
        <Layout titulo="Componente com Estado">
            <div>{numero}</div>
            <button onClick={incrementar}>Incrementar</button>
        </Layout>
    )
}

// Colocar um par de '[]' antes do '=' gera um Destructuring e depois gera um Array.
// O 'state' é um Array de 2 posições, a primeira é o valor e a segunda é uma função que altera o valor.