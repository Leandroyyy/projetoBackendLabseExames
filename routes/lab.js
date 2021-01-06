const express = require('express');
const router = express.Router();
const lab_controller = require('../controllers/lab')

//Criar lab
router.post('/create', lab_controller.create)
//Mostrar Labs
router.get('/id/:id', lab_controller.details);
router.get('/', lab_controller.detailsAll)
//Alterar
router.put('/:id', lab_controller.alterar);
//deletar
router.delete('/delete/:id', lab_controller.deletar);
//vincular exame ao lab
router.put('/exame/:id', lab_controller.alterarExame);

module.exports = router
