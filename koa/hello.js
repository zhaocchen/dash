const Koa = require('koa')

const app = new Koa()

app.use(ctx => {
    ctx.body = 'hello'
})

app.listen(3000)


// node hello
// http://localhost:3000/