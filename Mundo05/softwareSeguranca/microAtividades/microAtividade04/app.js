import { createConnection } from 'mysql2';

const connection = createConnection({
    host: 'localhost',
    user: 'admin',
    password: 'admin',
    database: 'testBd'
});

function doDBAction(id) {
    const query = 'SELECT * FROM users WHERE userID = ?';

    connection.execute(query, [id], (error, results) => {
        if (error) {
            console.error('Erro na consulta:', error);
            return;
        }
        console.log('Resultados:', results);
    });
}

//Testando a função doDBAction
doDBAction(1);
doDBAction(10); 





