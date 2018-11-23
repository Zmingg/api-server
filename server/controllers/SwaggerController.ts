import {Controller, Param, Body, Get, Post, Put, Delete, QueryParam} from "routing-controllers";
import {SwaggerService} from '../services';


@Controller('/swagger')
export class RepositoryController {

  private swaggerService: SwaggerService;

  constructor() {
    this.swaggerService = new SwaggerService();
  }

  @Get("/code-gen")
  async codeGen(@QueryParam('id') id: string,
                @QueryParam('type') type: string,
                @QueryParam('className') className: string
  ) {
    // Todo: code generator
    const code = await this.swaggerService.codeGen();

  }


}
