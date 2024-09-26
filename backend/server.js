const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello! Reserve sua sala, aproveite a praticidade do nosso sistema!');
});

app.post('/api/auth/register', (req, res) => {
    const nome = req.body.nome;
    const email = req.body.email;
    const senha = req.body.senha;

    if (!nome || !email || !senha) {
      return res.status(400).send('Todos os campos são obrigatórios.');
    }

    // TODO: Adicionar JWT, autenticação, divisão de autorização e sessões. 
    res.send(`Usuário cadastrado com sucesso: ${nome}, Email: ${email}`);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
