// db.js
// sem uso no momemento

const { DbConnection } = require('pg');

const dbConnection = new DbConnection({
    type: 'postgresql',
    host: 'localhost',
    database: 'acelera_movies',
    password: '1234',
    port: 5432, // porta padrão do PostgreSQL
    //adicionar TYPEORM NA CONEXÃO
    
});

module.exports = DbConnection;
