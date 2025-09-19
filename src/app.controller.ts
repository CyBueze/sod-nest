import { Controller, Get, Render} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render("pages/index")
  getHello(){
    return this.appService.getHello();
  }
  
  @Get("/about")
  @Render("pages/about")
  getAboutPage(){
    return {}
  }
}
