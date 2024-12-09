import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getRootRouter() {
    return 'Hi There!';
  }
}
