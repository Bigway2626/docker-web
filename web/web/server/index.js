const Koa = require('koa');
const app = new Koa();

const db = require('db');

app.use(async ctx => {
  const notes = [
    { number: 123, name: 'David', content: 'sss' }
  ];

  db('notes')
    .insert(notes)
    .then(() => {
      ctx.body = "data inserted";
    }).catch((err) => {
      ctx.body = err;
    }).finally(() => {
      db.destroy();
    });
});

app.listen(3000);