import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get('auth') // HTTP GET - localhost:3000/auth
    public getHello(): string {
        return this.appService.getHello();
    }
}
