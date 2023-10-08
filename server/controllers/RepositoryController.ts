import {Controller, Param, Body, Get, Post, Put, Delete, QueryParam} from "routing-controllers";
import {RepositoryService} from '../services';

@Controller('/api')
class RepositoryController {

  private repoService: RepositoryService;

  constructor() {
    this.repoService = new RepositoryService();
  }

  @Get("/pull")
  async getRepo() {
    return await this.repoService.pull();
  }

  @Get("/list")
  async getList(
    @QueryParam("repo") repo: string = 'default',
    @QueryParam("dir") dir: string,
  ) {
    return await this.repoService.list(repo, dir);
  }



}

export default RepositoryController;
