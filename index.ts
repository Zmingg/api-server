import "reflect-metadata";
import {useKoaServer} from "routing-controllers";
import {RepositoryController} from './server/controllers/RepositoryController';
const path = require('path');
const Koa = require('koa');
const serve = require('koa-static');
const app = new Koa();

// app.use() // you can configure it the way you want

app.use(serve(__dirname + '/repository'));


useKoaServer(app, { // register created express server in routing-controllers
   controllers: [RepositoryController] // and configure it the way you need (controllers, validation, etc.)
});

app.listen(3000, () => {
  console.log('Server is running at: 0.0.0.0:3000');
}); // run your express server