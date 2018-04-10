const axios = require('axios');
const consola = require('consola');
const querystring = require('querystring');

const express = require('Express');
const app = express();

const client_id = 'client_id';
const client_secret = 'client_secret';

app.get('/redirect', (req, res, next) => {
  const {code} = req.query;
  consola.info(`Recieveing 'code' from Github: ${code}`);
  consola.info('Getting access token from Github');
  const baseUrl = 'https://github.com/login/oauth/access_token';
  axios
    .post(
      baseUrl,
      querystring.stringify({
        code,
        client_id,
        client_secret,
      }),
    )
    .then(response => {
      consola.info(response.data);
      res.redirect('/?' + response.data);
    })
    .catch(error => {
      consola.error(error.message);
    });
});

app.use(express.static('public'));

app.listen(8000, () => consola.start('Server started on http://localhost:8000'));
