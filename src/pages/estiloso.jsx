import styles from '../styles/Estiloso.module.css'
import Layout from '../components/Layout'

export default function Estiloso() {
    return ( // Para referenciar uma classe CSS é necessário usar o className. É obrigatorio q acesse a classe CSS a partir de styles.
        <Layout titulo="Exemplo de CSS Modularizado">
            <div className={styles.roxo}>
                <h1>Estilo usando CSS Módulos</h1>
            </div> {/* É referenciado dentro do React como 'children' */}
        </Layout>
    )
}