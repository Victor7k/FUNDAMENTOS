
import Layout from '../components/Layout'

export function getStaticProps() { // Esta função pode ser uma função assincrona.
    return {
        props: {
            numero: Math.random()
        }
    }
}

export default function Estatico(props) {
    return (
        <Layout titulo="Conteúdo Estático">
            <div>{props.numero}</div>
        </Layout>
    )
}

// Fazer um exercicio do conteudo ser gerado do lado do servidor!
    // SITE: https://nextjs.org/docs/basic-features/pages#static-generation-recommended