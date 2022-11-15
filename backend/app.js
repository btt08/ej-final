const express = require('express');
const productsRouter = require('./routers/productsRouter')

const config = require('./modules/config');
const hostName = config.HOST;
const port = config.PORT;

require('./modules/mongo');
const app = express();

app.use('/products', productsRouter);

app.listen(port, hostName, () => {
  console.log(`Servidor lanzado en http://${hostName}:${port}`)
});