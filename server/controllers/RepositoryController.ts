import {Controller, Param, Body, Get, Post, Put, Delete} from "routing-controllers";
import {Inject} from "typedi";
import {RepositoryService} from '../services';

@Controller()
export class RepositoryController {

  private repoService: RepositoryService;

  constructor() {
    this.repoService = new RepositoryService();
  }

  @Get("/pull")
  async getRepo() {
    return await this.repoService.pull();
  }

  // @Get("/users/:id")
  // getOne(@Param("id") id: number) {
  //   return "This action returns user #" + id;
  // }
  //
  // @Post("/users")
  // post(@Body() user: any) {
  //   return "Saving user...";
  // }
  //
  // @Put("/users/:id")
  // put(@Param("id") id: number, @Body() user: any) {
  //   return "Updating a user...";
  // }
  //
  // @Delete("/users/:id")
  // remove(@Param("id") id: number) {
  //   return "Removing user...";
  // }

}
