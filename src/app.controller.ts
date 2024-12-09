import { Controller, Get } from '@nestjs/common';

@Controller('/app')
export class AppController {
  @Get('/hello')
  getRootRouter() {
    return 'Hi There!';
  }

  @Get('/bye')
  getByeThere() {
    return 'Bye There!';
  }
}
