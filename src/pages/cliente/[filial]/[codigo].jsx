import Layout from "../../../components/Layout";
import { useRouter } from "next/router" // Dá acesso ao valor dinâmico.

export default function ClienteProCodigo() {
    const router = useRouter()

    return (
        <Layout titulo="Navegação Dinâmica">
            <span>Código = {router.query.codigo}</span>
            <div>Filial = {router.query.filial}</div>
        </Layout>
    )
}

// Envolver o nome de um arquivo num par de [] o torna dinâmico.