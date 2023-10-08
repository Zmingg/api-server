import 'reflect-metadata';
import { useKoaServer } from 'routing-controllers';
const path = require('path');
const Koa = require('koa');
const serve = require('koa-static');
const app = new Koa();

/**
 * Use static root.
 */
app.use(serve(__dirname + '/repository'));

/**
 * Register controllers && middlewares.
 */
useKoaServer(app, {
  controllers: [path.resolve(__dirname, 'server/controllers/*.ts')],
  middlewares: [path.resolve(__dirname, 'server/middlewares/*.ts')],
});

/**
 * Run server.
 */
app.listen(3000, () => {
  console.log('Server is running at: 0.0.0.0:3000');
});