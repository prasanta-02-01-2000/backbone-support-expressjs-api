'use strict';
const express = require('express');
const config = require('./config');
const cors = require('cors');
const bodyParser = require('body-parser');
//routes dependency
const Routes = require('./routes/routes');

const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const app = express();

//setup Swagger
const swaggerDocument = YAML.load('./swagger.yaml');
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

//import routes
app.use('/api', Routes.routes);

app.listen(config.port, () => {
  console.log('server is listening on url http://localhost:' + config.port )
});