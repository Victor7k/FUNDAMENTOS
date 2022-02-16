export default function handler(req, res) {
    if(req.method === 'GET') {
        handleGet(req, res)
    } else {
        res.status(405).send() // 405 significa Metodo não permitido.
    }
}

function handleGet(req, res) {
    res.status(200).json({
        id: 3,
        nome: 'Maria',
        email: 'maria123@xcfmail.com'
    })
}