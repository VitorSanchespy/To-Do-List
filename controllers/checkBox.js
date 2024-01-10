const Task = require('../models/table');

const checkBox = async (req, res) => {
    const taskId = req.body.id;

    try {
        const task = await Task.findByPk(taskId); // Encontra a tarefa pelo ID
        if (!task) {
            return res.status(404).send('Tarefa não encontrada.');
        }

        // Inverte o valor do campo conclusaotask considerando que é armazenado como número
        task.conclusaotask = task.conclusaotask === 0 ? 1 : 0;

        await task.save(); // Salva a tarefa modificada

        res.redirect('/'); // Redireciona para a página inicial (ou outra rota desejada)
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao atualizar o estado da tarefa.');
    }
};

module.exports = checkBox;
