/*IMPORTAÇÃO DO PACOTE EXPRESS*/
const express= require ("express");

/*IMPORTAÇÃO DO PACOTE CONTROLLER DO ESTILO MARCIAL*/
const artesMarcialController = require('./controller/artesMarcial');

/*CRIAÇÃO DE UMA INSTÂNCIA EXECUTAVEL DO EXPRESS*/
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

/*ROTAS DE ESTILOS MARCIAIS*/
//console.log('A REQUISIÇÃO PASSOU PARA A INDEX');
app.use("/", artesMarcialController);

/* 

ROTA RAIZ DO VERBO HTTP GET:
PARAMETROS DE ROTAS (QUALQUER VERBO):
1 - NOME DA ROTA
2 - CALLBACK QUE TRATA REQUISIÇÃO (req) E RESPOSTA (res)
*/
/*
app.get('/', (req, res)=>{
    
    console.log('ROTA RAIZ DE VERBO HTTP GET!');
    res.send('ROTA RAIZ DE VERBO HTTP GET!');

});

app.get('/teste', (req, res)=>{

    console.log('ROTA DE TESTE DE VERBO HTTP GET!');
    res.send('ROTA DE TESTE DE VERBO HTTP GET!');
    
});*/

/* 
CRIAÇÃO DO SERVIDOR DE REQUISIÇÕES HTTP DA APLICAÇÃO 
PARAMETROS DO LISTEN
1 - PORTA LÓGICA QUE RECEBE AS REQUISIÇÕES
2 - CALLBACK - ARROW ANONIMA (OPCIONAL)
*/

app.listen(3000, ()=>{
    console.log("SERVIDOR RODANDO EM: http://localhost:3000");
});


