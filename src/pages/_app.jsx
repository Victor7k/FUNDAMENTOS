// Este é o local para importar os CSSs globais.
import '../styles/globals.css'
import '../styles/app.css'

// Está função está fazendo com que os arquivos dentro de 'pages' sejam exibidos.
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
