/* 
No React existem 2 tipos de componentes, o funcional(baseado em função) e o baseado em classe.

O Next.js foca muito em vc não precisar configurar as coisas, vc usará uma série de convenções q te ajudaram a desenvolver sua aplicação.
  Uma delas é quando cria um arquivo dentro da pasta 'pages' vc automaticamente tem acesso ao arquivo na URL tendo o mesmo caminho da estrutura de pastas q vc criou.
    Estes arquivos tem o proposito de agrupar uma série de componentes para formar uma página completa.

Para este componente funcional ser visto e executado na tela ele deve ser exportado desta maneira.
*/

import Navegador from '../components/Navegador'
import React from 'react';

export default function Inicio() {
  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        height: '100vh',
      }}>
      <Navegador destino="/estiloso" texto="Estiloso" />
      <Navegador destino="/exemplo" texto="Exemplo" cor="#9400d3" />
      <Navegador destino="/jsx" texto="JSX" cor="crimson" />
      <Navegador destino="/navegacao/" texto="Navegação #01" cor="green" />
      <Navegador destino="/cliente/sp-3/456" texto="Navegação #02" cor="blue" />
      <Navegador destino="/estado" texto="Componente com Estado" cor="orange" /> 
      <Navegador destino="/integracao_1" texto="Integração com API #01" cor="brown" />
      <Navegador destino="/estatico" texto="Conteúdo Estático" cor="#fa054a" />
        {/* O 'index.jsx' é representado pelo '/' dentro da navegação. */}
    </div>
  )
}

/* 
No JSX vc pode criar trechos, tags HTML e "HTML" (q na verdade são códigos JS disfarçados de HTML q vai gerar o HTML quando for executado no Browser) dentro dos componentes.
Se vc retornar desse jeito: return "<h1>Teste!</h1>" vai ser interpretado como um valor textual.
  Deve ser retornado deste jeito por exemplo: <h1>Título</h1>
  Ou dentro de ()
*/