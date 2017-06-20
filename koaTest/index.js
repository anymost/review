let Koa = require('Koa');
let app = new Koa();
app.use(async (context, next)=>{
    console.log('first middleware start');
    await next();
    console.log('first middleware end');
});

app.use(async (context, next)=>{
    console.log('second middleware start');
    await next();
    console.log('second middleware end');
});

app.use(async (context, next)=>{
    console.log('third middleware start');
    await next();
    console.log('third middleware end');
});

app.use(async (context, next)=>{
    console.log('fourth middleware start');
    context.body='response end';
    console.log('fourth middleware end');

});

app.listen(3000);
/*
const Koa = require('koa');
const app = new Koa();

// x-response-time

app.use(async function (ctx, next) {
    const start = new Date();
    console.log('first start');
    await next();
    const ms = new Date() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
    console.log('first end');
});

// logger

app.use(async function (ctx, next) {
    const start = new Date();
    console.log('second start');
    await next();
    const ms = new Date() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}`);
    console.log('second end');
});

// response

app.use(ctx => {
    ctx.body = 'Hello World';
});

app.listen(3000);*/
