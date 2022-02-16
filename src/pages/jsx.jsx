import Layout from '../components/Layout'

export default function Jsx() {
    const titulo = <h1>JSX é um conceito Central!</h1>

    function subtitulo() {
        return <h2>{"Muito legal".toUpperCase()}</h2>
    }

    return (
        // Para ter acesso ao mundo do JavaScript dentro de um trecho JSX é necessário envolver o código dentro de um par de {} 
        <Layout titulo="Entendendo o JSX">
            <div>
                {titulo}
                {subtitulo()}
                <p>
                    {JSON.stringify({ nome: "João", idade: 30 })}
                </p>
            </div>
        </Layout>
    )
}