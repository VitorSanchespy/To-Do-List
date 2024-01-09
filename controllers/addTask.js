const Task = require('../models/table');

const add =(req, res)=>{
Task.create({
    name: req.body.tarefa,
}).then(()=>{
    res.status(201).redirect('/');
}).catch((erro)=>{
    res.send('Houve um erro '+erro);
})
};
module.exports = add