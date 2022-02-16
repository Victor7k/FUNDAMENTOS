export default function Cabecalho(props) { 
    return (
        <header>
            <h1>{props.titulo}</h1>
        </header>
    )
}

/*
    Quando vc cria um componente baseado em função, vc irá referencia-lo não como se invocasse uma função,
        mas vai instancia-lo como um elemento JSX.
    
    O objetivo de criar um componente é ter o reuso.

    O 'props' são as Propriedades do Componente, q tem todos os parametros passados no componente.
    
    As propriedades não podem ser modificadas! 'props' é somente leitura.
*/