import { Controller, Module, Get } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

@Controller()
class AppController {
  @Get()
  getRootRouter() {
    return 'Hi There!';
  }
}

@Module({
  controllers: [AppController],
})
class AppModule {}

async function bootStrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(4500);
}

bootStrap();
