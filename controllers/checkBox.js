const Task = require('../models/table');

const checkBox = async (req, res) => {
    const taskId = req.body.id;

    try {
        const task = await Task.findByPk(taskId);
        if (!task) {
            return res.status(404).send('Tarefa não encontrada.');
        }

        task.conclusaotask = !task.conclusaotask; // Inverte o valor do campo conclusaotask

        await task.save(); // Salva a tarefa modificada

        res.status(200).json({ success: true }); // Responde com sucesso
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao atualizar o estado da tarefa.' });
    }
};

module.exports = checkBox;