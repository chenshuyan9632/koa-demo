import todo from '../model/todo';
import { successResponse } from '../utils/response';
// import { toSafeNumber } from '../utils/utils';

async function add(ctx, next) {
  const { userId, content, completed } = ctx.request.body;
  const res = await todo.create({ userId, content, completed });
  if (res.length !== 0) {
    ctx.body = {
      failed: false,
      message: res
    }
  } else {
    ctx.body = {
      failed: true,
      message: '新增失败'
    }
  }
}

async function fetchList(ctx, next) {
  // const { userId, current = 0, pageSize = 10 } = toSafeNumber(ctx.query, ['current', 'pageSize']);
  // const userId = ctx.query.query;
  const { query: userId } = ctx.request.body;
  // const total = await todo.find({ userId });
  // console.log(current, pageSize);
  // let res = await todo.find({ userId }).sort({ time: -1 }).skip((current) * pageSize).limit(pageSize);
  let res = await todo.find({ userId });

  console.log(res);
  if (res instanceof Array && res.length >= 0) {
    ctx.body = successResponse({
      // current,
      // pageSize,
      // total: total.length,
      message: "查询成功",
      content: res,
    });
  } else {
    ctx.body = {
      failed: false,
      message: '无list',
      content: []
    }
  }
}

async function update(ctx,next) {
  const { content } = ctx.request.body;
  const completed = { "completed": true};
  const res = await Promise.all(
    content.map(item=>{
    return todo.updateMany({content:item}, completed)
    })
  )
  if(res && res.length === content.length){
    ctx.body = {
      code:200,
      message: "更新成功",
    }
  }
  
}

module.exports = { add, fetchList, update }