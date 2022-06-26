const express = require('express');
const router = express.Router();
const config = require('../config/config');

router.get('/', async (req, response) => {
  // const test = await service.find();
  config.client.query('SELECT * FROM POST', (err, res) => {
    if (err) {
      return console.error('Cant get post data', err);
    }
    response.status(200).json(res.rows);
  });
});

router.post('/', async (req, response) => {
  // validar campos
  let idPost = req.body.id;
  let namePost = req.body.name;
  let descriptionPost = req.body.description;
  if (namePost === null ){
    response.status(400).json('Falta nombre del post');
  }
  if (descriptionPost === null ){
    response.status(400).json('Falta nombre descripción del post');
  }
  query =
    'INSERT INTO POST (id, name, description) ' +
    'VALUES($1, $2, $3)';

  config.client.query(
    query,
    [idPost, namePost,descriptionPost],
    function (error, result) {
      if (error) {
        message =
          'Database failure. Connection to PostgreSQL could not be established!';
        console.error(message, error);
        return result.send(message);
      }
      console.log('count :',result.rowCount);
      // una vez creado el usuario, retorno a la página de inicio
      response.status(201).json('Post Registered!');
    }
  );
});

router.delete('/:id', async (req, response) => {
  const id = req.params.id;
  // validar id existe por un select 
  query =
    'DELETE FROM POST where id =' +
    '$1';

  config.client.query(
    query,
    [id],
    function (error, result) {
      if (error) {
        message =
          'Database failure. Connection to PostgreSQL could not be established!';
        console.error(message, error);
        return result.send(message);
      }
      // una vez creado el usuario, retorno a la página de inicio
      response.status(204).json('post delete!');
    }
  );
});

module.exports = router;
