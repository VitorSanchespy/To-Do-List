const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('todolist', 'root', '12345', {
    host:'localhost',
    dialect:'mysql',
    port:3306,
  });

async function connection(){
  try{
    await sequelize.authenticate()
    console.log('Conexão com o banco de dados estabelecida com sucesso.')
  }catch(error){
    console.error('Erro ao conectar ao banco de dados:', error);
  }
}

connection()

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}