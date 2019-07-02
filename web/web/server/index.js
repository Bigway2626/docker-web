const Koa = require('koa');
const router = require('./route');
const middleware = require('./middleware');

const app = new Koa();

middleware(app);
router(app);

app.listen(3000, () => {
  console.log(`server is listening port on: 3000`);
});