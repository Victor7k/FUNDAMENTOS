// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ 
    name: 'John Doe',
    metodo: req.method, // Informa o metodo HTTP usado para fazer a requisição.
    nome: req.query.nome,
    idade: +req.query.idade // O '+' transforma num valor numérico.
  })
}

/* 
  Next.js é a versão framework da biblioteca Frontend mais famosa do mundo, o React.
    Ele acrescenta ao React uma estrutura, uma série de funcionalidades para ter uma estrutura básica para construir a aplicação.
    Ele é FullStack tendo o frontend e permitindo q vc crie suas APIs.
     
  Framework te dá uma estrutura pré-pronta para q vc possa personalizar e começar a desenvolver suas aplicações.
*/