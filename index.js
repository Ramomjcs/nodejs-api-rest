const customExpress = require('./config/customExpress');
const conexao = require('./infraestrutura/conexao');
const Tabelas = require('./infraestrutura/tabelas');

//passamos uma função para saber se conectou
conexao.connect(erro => {
    if(erro) {
        console.log(erro);
        
    } else{
        console.log('Banco de Dados conectado ao MySQL');

        Tabelas.init(conexao);
        const app = customExpress(); 

        app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
    }
});

