    async function updateTask(checkbox) {
        const taskId = checkbox.parentNode.querySelector('input[id="checkbox"]').value;
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
            // Trate o erro adequadamente
        }
    }
