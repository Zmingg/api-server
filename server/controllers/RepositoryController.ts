import {Controller, Param, Body, Get, Post, Put, Delete} from "routing-controllers";
import {RepositoryService} from '../services';

@Controller('/api')
export default class RepositoryController {

  private repoService: RepositoryService;

  constructor() {
    this.repoService = new RepositoryService();
  }

  @Get("/pull")
  async getRepo() {
    return await this.repoService.pull();
  }

  @Get("/list")
  async getList() {
    return await this.repoService.list();
  }



}
