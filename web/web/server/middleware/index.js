const bodyParser = require('koa-bodyparser');
const cors = require('koa2-cors');

module.exports = app => {
    app.use(cors());
    app.use(bodyParser());
};