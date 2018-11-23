import {Controller, Param, Body, Get, Post, Put, Delete} from "routing-controllers";
import {RepositoryService} from '../services';

@Controller()
export class RepositoryController {

  private repoService: RepositoryService;

  constructor() {
    this.repoService = new RepositoryService();
  }

  @Get("/api/pull")
  async getRepo() {
    return await this.repoService.pull();
  }

  @Get("/api/list")
  async getList() {
    return await this.repoService.list();
  }



}
