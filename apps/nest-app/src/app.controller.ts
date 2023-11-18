import { Controller, Get } from '@nestjs/common';
import {Service} from ":module1";

@Controller()
export class AppController {
  @Get()
  getHello() {
    return new Service().getItems();
  }
}
