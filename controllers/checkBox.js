const Task = require('../models/table');


const checkBox = async (req, res) => {
    const taskId = req.params.taskId;
    const isChecked = req.body.isChecked === 'true'; // Converte para booleano

    try {
        const task = await Task.findByPk(taskId);
        if (!task) {
            return res.status(404).send('Tarefa não encontrada');
        }

        // Atualiza o valor de conclusaotask
        task.conclusaotask = isChecked ? 'true' : 'false';
        await task.save();

        res.status(200).send('Tarefa atualizada com sucesso');
    } catch (error) {
        console.error('Erro:', error);
        res.status(500).send('Erro ao atualizar a tarefa');
    }
};

module.exports = checkBox





