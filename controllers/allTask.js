const Task = require('../models/table');

const alltask = async (req, res) => {
    try {
        const allTask = await Task.findAll()
            allTask.forEach(task => {
                task.isChecked = task.conclusaotask === 'true'; // Adiciona uma propriedade isChecked com base em conclusaotask
            });
        res.render('form', { allTask: allTask });
    } catch (error) {
        res.status(500).send('Erro ao buscar as tarefas');
    }
}

module.exports = alltask