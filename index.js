const express = require('express');
const app = express();
const env = require('dotenv');
const port = process.env.PORT || 3000;
const path = require('path');

const routes = require('./routes');
app.use('/', routes);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});