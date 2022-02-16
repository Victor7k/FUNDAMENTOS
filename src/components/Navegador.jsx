import Link from 'next/link'
import styles from '../styles/Navegador.module.css'

export default function Navegador(props) {
    return (
        <Link href={props.destino} passHref>
            <div className={styles.navegador} style={{
                backgroundColor: props.cor ?? 'dodgerblue'
            }}>
                {props.texto}
            </div>
        </Link>
    )
}

/*
A pré-renderização acontece por padrão em cada página 
    para ter um melhor desempenho e trabalhar mais eficiente com o SEO(Search Engine Optimization).

    Geração de Conteúdo Estático - Gera conteudo estático e o reutiliza numa mesma página HTML no momento em q faz o build da aplicação.
        SSG - Gera conteudo estático + JSON.
        ISR(Geração Incremental Estática) - Acontece quando tem um tipo de propriedade de revalidação.

    SSR (Renderização do lado do servidor) - Vai gerar do lado do servidor dinamicamente o HTML uma resposta especifica para cada requisição feita.
*/