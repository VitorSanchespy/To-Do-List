const Task = require('../models/table');

const deleteTask = ('/delete/', async (req, res) => {
    const {id} = req.body;
    console.log(id)
    Task.destroy({ where: { id: id } }).then(() => {
        res.redirect('/');
    }).catch((e) => {
        console.error(e);
        res.render('/', { e: 'Ocorreu um erro. Tente novamente mais tarde.' });
    })
});

module.exports = deleteTask