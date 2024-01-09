const {Router} = require('express');
const add = require('../controllers/addTask');
const alltask = require('../controllers/allTask');
const deleteTask = require('../controllers/deleteTask');
const checkBox = require('../controllers/checkBox')
const rota = Router()

//Rotas
rota.get('/', alltask);

rota.post('/add', add);

rota.post('/delete', deleteTask)

rota.post('/updateCheckBox/:taskId', checkBox)



module.exports = rota