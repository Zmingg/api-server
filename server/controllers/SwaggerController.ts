import {Req, Res, Controller, Get, QueryParam, Header, ContentType} from "routing-controllers";
import {SwaggerService} from '../services';


@Controller('/swagger')
export default class SwaggerController {

  private swaggerService: SwaggerService;

  constructor() {
    this.swaggerService = new SwaggerService();
  }

  @Get("/code-gen")
  @ContentType('application/octet-stream')
  @Header('Content-Disposition', 'attachment')
  async codeGen(@QueryParam('uri') uri: string,
                @QueryParam('className') className: string
  ) {
    // code generator
    const code =  await this.swaggerService.codeGen(uri);

    // return response.sendFile(filePath);
    return {
      filename: className + '.ts',
      attachment: code
    };
  }


}
