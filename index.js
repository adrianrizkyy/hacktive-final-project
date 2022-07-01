const express = require('express');
const app = express();
const port = 3000;
const routes = require('./routes/index.js');

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/', routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});