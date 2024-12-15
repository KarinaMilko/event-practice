const expres = require('expres');
const { errorHandlers } = require('./middleware');
const router = require('./routes');

const app = expres(errorHandlers.errorHandler);

app.use(expres.json());

app.use('/api', router);

app.use();

module.exports = app;

// httpClient.post('', body) => express.json() => req.query
