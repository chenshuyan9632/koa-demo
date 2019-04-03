import Koa from 'koa';
import connect from './db/connect';
import bodyParser from 'koa-bodyparser';
import cors from 'koa2-cors';
import router from './routes/index';
const app = new Koa();

connect();
app.use(cors());
app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());
app.listen(3000, () => console.log('listen on 3000'));
