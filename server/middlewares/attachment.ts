import {KoaMiddlewareInterface, Middleware} from "routing-controllers";

@Middleware({type: "after"})
export class AttachmentMiddleware implements KoaMiddlewareInterface {
  use(context: any, next: (err?: any) => Promise<any>): Promise<any> {
    const response = context.response;
    const header = response.header;

    // test if header Content-Disposition has attachment
    if (response.body && response.body.filename && response.body.attachment &&
      header['content-disposition'].indexOf('attachment') >= 0) {
      response.set('content-disposition',  'attachment;' + 'filename=' + response.body.filename);
      response.body = response.body.attachment;
    }

    return next();
  }
}
