const express = require('express');
const router = express.Router();
const exame_controller = require('../controllers/exames');


router.get('/test', exame_controller.testar);    
//Cria um exame
router.post('/create', exame_controller.create);
//Procura um exame pelo Id
router.get('/:id', exame_controller.details);
//Mostra todos os exames
router.get('/', exame_controller.detailsAll);
//Atualiza informaçoes de um exame
router.put('/:id', exame_controller.update)
//Deleta um exame
router.delete('/:id', exame_controller.delete)

module.exports = router
