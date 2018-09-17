import "reflect-metadata";
import {useKoaServer} from "routing-controllers";
import {RepositoryController} from './server/controllers/RepositoryController';

const Koa = require('koa');
const app = new Koa();
// app.use() // you can configure it the way you want

useKoaServer(app, { // register created express server in routing-controllers
   controllers: [RepositoryController] // and configure it the way you need (controllers, validation, etc.)
});
app.listen(3000, () => {
  console.log('Server is running at: 0.0.0.0:3000');
}); // run your express server