import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('GetHelloMessage')
  getHello(): string {
    return this.appService.getHello();
  }

    @Get('GetUserInformation')
    GetUserInformation(): string {
        return this.appService.getUserInformation();
    }
}
