const conection = require('knex')({
    client: 'sqlite3',
    connection: {
      filename: './database/dataBase.sqlite3'
    }, 
    useNullAsDefault:true 
  });

module.exports = conection;
