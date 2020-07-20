const Emitter = require('events');
const http = require('http');
const compose = require('./compose.js')
const request = require('./request');
const response = require('./response');
const context = require('./context');


module.exports = class Application extends Emitter {
  constructor(options) {
    super();
    this.middleware = [];
    this.compose = compose;
    this.context = context;
    this.request = request;
    this.response = response;
  }

  listen(...args) {
    const server = http.createServer(this.callback());
    return server.listen(...args);
  }

  use(fn) {
    this.middleware.push(fn);
    return this;
  }

  responseBody (ctx) {
    let content = ctx.body;
    if (typeof content === 'string') {
      ctx.res.end(content);
    } else if (typeof content === 'object') {
      ctx.res.end(JSON.stringify(content));
    }
  }

  onError (err, ctx) {
    if (err.code === 'ENOENT') {
      ctx.status = 404;
    } else {
      ctx.status = 500;
    }
    let msg = err.message || "服务错误";
    ctx.res.end(msg);
    this.emit('error', err);
  }

  createContext(req, res) {
    let ctx = Object.create(this.context);
    ctx.request = Object.create(this.request);
    ctx.response = Object.create(this.response);
    ctx.req = ctx.request.req = req;
    ctx.res = ctx.response.res = res;
    return ctx;
  }

  callback() {
    return (req, res) => {
      const ctx = this.createContext(req, res); 
      let respond = () => this.responseBody(ctx);
      let onError = (err) => this.onError(err, ctx);
      let fn = this.compose();
      return fn(ctx).then(respond).catch(onError)
    }
  }
}