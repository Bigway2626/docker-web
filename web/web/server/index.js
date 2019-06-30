const Koa = require('koa');
const Router = require('koa-router');
const db = require('./db/db');

const app = new Koa();
const router = new Router();

router.get('/', (ctx, next) => {
  ctx.body = 'ss';
});

async function getNotes() {
  const notes = await db.select().table('notes');

  return notes;
}

router.get('/list', async (ctx) => {
  const notes = await db.select().table('notes');

  ctx.body = notes;
});

router.get('/insert', async (ctx) => {
  try {
    const notes = [
      { number: 52642, name: 'Audi', content: '56565' },
    ];

    await db('notes').insert(notes);

    ctx.body = 'data inserted!';
  } catch (error) {
    ctx.body = error;
  }
});

router.get('/delete', async (ctx) => {
  try {
    await db('notes')
      .where('name', 'David')
      .del();

    ctx.body = 'data deleted!';
  } catch (error) {
    ctx.body = error;
  }
});

router.get('/update', async (ctx) => {
  try {
    await db('notes')
      .where('name', 'Audi')
      .update({
        name: 'Benz'
      })

    ctx.body = 'data updated!';
  } catch (error) {
    ctx.body = error;
  }
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);