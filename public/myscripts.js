async function checkBox(taskId) {
    const checkbox = document.getElementById(`updateForm_${taskId}`).querySelector('input[type="checkbox"]');
    const isChecked = checkbox.checked;
    try {
        const response = await fetch('/update', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: taskId, conclusaotask: isChecked })
        });
        if (!response.ok) {
            throw new Error('Erro ao atualizar a tarefa');
        }
    } catch (error) {
        console.error(error);
    }
}   