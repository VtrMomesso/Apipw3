const express = require('express');

/*CONFIGURAÇÃO DAS ROTAS DE CATEGORIA*/
const router = express.Router();

/* IMPORT DA MODEL DE CATEGORIA */
const artesMarcial = require('../model/artesMarcial');

/* PARAMETROS DE ROTAS (QUALQUER VERBO):
1 - NOME DA ROTA - REPRESENTADO POR UMA STRING
2 - CALLBACK QUE TRATA REQUISIÇÃO (req) E RESPOSTA (res)
*/
/*ROTAS DE CRUD DE ARTES MARCIAL:*/
router.get('/', (req, res)=>{

    // console.log('TESTE DE ROTA GET DE ARTES MARCIAL');
    // console.log('----A REQUISIÇÃO GET PASSOU PELA ARTES MARCIAL CONTROLLER----');
    // res.send('----TESTE DE ROTA GET DE CATEGORIAS----');

    //LISTANDO OS DADOS SEM CRITÉRIOS
    artesMarcial.findAll()
        .then(
            (artesMarcial)=>{
                return res.status(200).json(artesMarcial);
            }
        ).catch(
            (erro)=>{
                return res.status(400).json({
                    erroStatus: true,
                    erroMessagem: 'Houve um erro ao selecionar os dados de Artes Marcial',
                    erroBancoDados: erro
                });
            }
        );

});

//LISTANDO OS DADOS COM CRITÉRIOS
router.get('/listaArtesMarcial/:id',(req, res)=>{

    let {id} = req.params;

    artesMarcial.findByPk(id)
        .then(
            (artesMarcial)=>{
                res.status(200).json(artesMarcial);
            }
        ).catch(
            (erro)=>{
                return res.status(400).json({
                    erroStatus: true,
                    erroMessagem: 'Houve um erro ao selecionar os dados da Artes Marcial',
                    erroBancoDados: erro
                });
            }
        );

});

router.post('/inserirArtesMarcial', (req, res)=>{
    // console.log('A REQUISIÇÃO POST PASSOU PELA CATEGORIA CONTROLLER');
    // res.send('TESTE DE ROTA POST DE CATEGORIAS');

    //RECEBER OS DADOS
    // console.log(req.body.nome_categoria);
    // let nome_categoria = req.body.nome_categoria;
    let {artesMarcial} = req.body;
    // console.log(nome_categoria);
    
    //GRAVAR OS DADOS
    modelCategoria.create(
        {artesMarcial}
    ).then(
        ()=>{
                return res.status(201).json({
                    erroStatus: false,
                    menssagemStatus: 'Artes Marcial inserida com sucesso!'
            });
        }
    ).catch(
        (erro)=>{
                    return res.status(400).json({
                        erroStatus: true,
                        erroMessagem: 'Houve um erro ao cadastrar a Artes Marcial desejada',
                        erroBancoDados: erro
                    });
        }
    );

});

router.put('/alterarArtesMarcial', (req, res)=>{

    // console.log('A REQUISIÇÃO PUT PASSOU PELA CATEGORIA CONTROLLER');
    // res.send('TESTE DE ROTA PUT DE CATEGORIAS');

    //RECEBENDO OS DADOS:
    let {id, artesMarcial} = req.body;

    //ALTERANDO OS DADOS:
    modelCategoria.update(
        {artesMarcial},
        {where:{id}}
    ).then( ()=>{

        return res.status(200).json({
            erroStatus: false,
            menssagemStatus: 'Categoria alterada com sucesso!'
        });

    }).catch(
        (erro)=>{
                    return res.status(400).json({
                        erroStatus: true,
                        erroMessagem: 'Houve um erro ao alterar a Artes Marcial',
                        erroBancoDados: erro
                    });
        }
    );

});

router.delete('/excluirArtesMarcial/:id', (req, res)=>{

    // console.log('A REQUISIÇÃO DELETE PASSOU PELA CATEGORIA CONTROLLER');
    // res.send('TESTE DE ROTA DELETE DE CATEGORIAS');

    let {id} = req.params;

    modelCategoria.destroy(
        {where: {id}}
    ).then( ()=>{

        return res.status(200).json({
            erroStatus: false,
            menssagemStatus: 'Artes Marcial excluída com sucesso!'
        });

    }).catch(
        (erro)=>{
                    return res.status(400).json({
                        erroStatus: true,
                        erroMessagem: 'Houve um erro ao excluir a Arte Marcial',
                        erroBancoDados: erro
                    });
        }
    );

});

module.exports = router;