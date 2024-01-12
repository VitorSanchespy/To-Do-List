const Task = require('../models/table');

const alltask = async (req, res) => {
    try {
        const allTask = await Task.findAll()
        res.render('form', { allTask: allTask });
    } catch (error) {
        res.status(500).send('Erro ao buscar as tarefas');
    }
}

module.exports = alltask