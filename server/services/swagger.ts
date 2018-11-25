const fs = require('fs');
const path = require('path');
const YamlJS = require('js-yaml');
const CodeGen = require('swagger-js-codegen').CodeGen;

export default class SwaggerService{

  protected path: string;

  constructor(){

  }

  /**
   * Generate code for ts/js.
   * @param uri
   */
  async codeGen(uri: string) {
    const file = path.resolve(path.resolve(__dirname, '../../repository' + uri));
    const swagger = YamlJS.safeLoad(fs.readFileSync(file, 'UTF-8'));
    return CodeGen.getTypescriptCode({
      className: 'Test',
      swagger: swagger
    });
  }
}