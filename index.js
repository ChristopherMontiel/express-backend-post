const express = require('express');
const cors = require('cors');
const config = require('./config/config');
const routerApi = require('./routes');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

const whiteList = ['http://localhost:3000'];
const options = {
  origin: (origin, callback) => {
    if (whiteList.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('No permitido'));
    }
  },
};
app.use(cors(options));

routerApi(app);

app.listen(port, () => {
  console.log(`El puerto es: ${port}`);
});