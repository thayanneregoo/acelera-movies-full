//vai puxar do banco de dados
// sem uso no momento

const db = require('./db');

const getMovie = async () =>{
        const movies = await db.query(' SELECT * FROM movies');
        return movies
}

// queries.js



const getUsers = async () => {
    const result = await db.query('SELECT * FROM users');
    return result.rows;
};

module.exports = {
    getMovie,
};
