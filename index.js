const Koa = require('koa');

const app = new Koa();

app.use(ctx => {
  ctx.body = 'Hello Travis';
});

app.listen(7458);
