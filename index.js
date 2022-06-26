const express = require('express');
const config = require('./config/config');
const routerApi = require('./routes');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
routerApi(app);

app.listen(port, () => {
  console.log(`El puerto es: ${port}`);
});