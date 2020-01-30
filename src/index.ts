import { config } from 'dotenv';
import * as Koa from 'koa';

config();

const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(process.env.PORT);
