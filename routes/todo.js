import KoaRouter from 'koa-router';
import { add, fetchList, update } from '../controller/todo';
const todo = new KoaRouter();

todo.post('/add', add);
todo.post('/fetch', fetchList);
todo.post('/update', update);

module.exports = todo;
