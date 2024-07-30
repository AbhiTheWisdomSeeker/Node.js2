const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'Localhost',
    user: 'root',
    password: '',
    database: 'testdb'
});

con.connect((err)=>{
    if(err) throw err;
    console.log('Connected to the database');
});

module.exports = con;