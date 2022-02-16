import Layout from '../components/Layout'
import Cabecalho from '../components/Cabecalho'

export default function Exemplo() {
    return (
        <Layout titulo="Usando Componentes">
            <Cabecalho titulo='Next.js & React' />
            <Cabecalho titulo='Aprenda Next na prática' />
        </Layout>
        
    )
}

/* 
    Numa função vc não pode retornar mais de um trecho JSX, 
        eles são chamados de elementos transversais.
    Para retornar mais de 1 elemento é necessario 
        coloca-los dentro de uma <div> ou usar o Fragments do React.
*/