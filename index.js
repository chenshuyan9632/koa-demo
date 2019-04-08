import Koa from 'koa';
import connect from './db/connect';
import bodyParser from 'koa-bodyparser';
import cors from 'koa2-cors';
import router from './routes/index';
const app = new Koa();

connect();
app.use(
  cors({
    origin: function(ctx) {
      // if (ctx.url === '/test') {
      //   return "*"; // 允许来自所有域名请求
      // }
      return 'http://localhost:8080'; // 这样就能只允许 http:/ / localhost: 8080 这个域名的请求了
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept',],
  }),
);
app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());
app.listen(3000, () => console.log('listen on 3000'));
