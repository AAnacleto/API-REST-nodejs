const express = require('express');
const router = express.Router();

//RETORNA TODOS OS PEDIDOS
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando o Get dentro da rota de pedidos'
    })
});

//INSERE UM PEDIDOS
router.post('/', (req, res, next) => {
    const pedidos = {
        id_produto: req.body.id_produto,
        quantidade: req.body.quantidade
    };

    res.status(201).send({
        mensagem: 'Usando o Post dentro da rota de pedidoss',
        pedidoCriado: pedidos
    })
});


//RETORNA OS DADOS DE UM PEDIDOS
router.get('/:id_pedido', (req, res, next) => {
    const id = req.params.id_pedidos
    
        res.status(200).send({
            mensagem: 'detalhes de um pedido',
            id: id
        });
       
});



router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Usando o DELETE dentro da rota de pedidos'
    })
});

module.exports = router;