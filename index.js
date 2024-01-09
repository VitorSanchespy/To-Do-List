const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const rota = require('./routes/routes');
const app = express();
//configuração
app.engine('handlebars', handlebars.engine({defautLayout: 'main',
    runtimeOptions: {
              allowProtoPropertiesByDefault: true,
              allowProtoMethodsByDefault: true,
            }}))
    app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json())
app.use(rota)
app.use(express.static("public"));

//encerramento do servidor
const PORT = process.env.PORT || 3040
app.listen(3040, ()=>{
    console.log(`Servidor em execução na porta http://localhost:${PORT}`)
})