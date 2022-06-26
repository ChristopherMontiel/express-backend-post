let postgreSQL = require('pg');

let client = new postgreSQL.Client(
{
    host : 'localhost',
    user : 'postuser',         
    password : 'postpass',  
    database : 'postdb',     
});

// conexión con la base de datos
client.connect( function(err)
{
	if(err)
  {
    return console.error( "Database failure. Connection to PostgreSQL could not be established!", err);
  }; 
  
  // creación de la tabla users para el registro de usuarios
  client.query( 'SELECT * FROM POST', function(err,result)
  {
    if(err)
    {
      return console.error('Database Error. Connection to PostgreSQL failed', err);
    }
    if(result.rowCount > 0) {
      console.log("Se han encontrado ",result.rowCount," posts");
      console.table(result.rows);
    }        
  });
});

module.exports.client = client;