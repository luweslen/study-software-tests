const Koa = require('koa');
const Router = require('koa-router');

const isPrime = require('./isPrime.js')

const app = new Koa();
const router = new Router();

router.get('/isPrime/:number', (ctx, next) => {
  const numberIsPrime = isPrime(ctx.params.number)
  ctx.body = numberIsPrime
});

app
  .use(router.routes())
  .use(router.allowedMethods());

const server = app.listen(3000);

module.exports = server;