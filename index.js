const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
const routes = require('./src/api/v1');

app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/static', express.static('public/static',  {
  index: false,
  redirect: false
}));


app.use('/api/v1', routes);

app.get('*', (req, res) => {
    res.render(path.join(__dirname, 'public/index.ejs'));
});
  
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log(`API running on localhost:${port} `));