const path = require("path");
const Koa = require("koa");
const cors = require("@koa/cors");
const koaStatic = require("koa-static");
const Router = require("@koa/router");

const app = new Koa();

app.use(cors());

app.use(koaStatic(path.resolve(__dirname, "./static")));

const router = new Router();
router.get("/api/hello", (ctx, next) => {
  ctx.body = "hello";
});
router.get("/api/json", (ctx, next) => {
  ctx.body = JSON.stringify({ a: 1, b: { aa: 2 } });
});
router.get("/api/500", (ctx, next) => {
  ctx.body = JSON.stringify({ a: 1, b: { aa: 2 } });
  ctx.status = 500;
});
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);
