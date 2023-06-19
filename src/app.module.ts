import { Module } from '@nestjs/common';
import { AppContoller } from './app.controller';
import { AppService } from './app.service';

@Module({
  controllers: [AppContoller],
  providers: [AppService],
})
export class AppModule {}
