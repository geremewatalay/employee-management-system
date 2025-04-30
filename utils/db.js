import mysql from 'mysql2';

const con= mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'employeems'
});

con.connect(function(err) {
  if (err){
    console.log('Error connecting to the database:', err);
  } else {
    console.log('Connected to the database');
  }
})

export default con;