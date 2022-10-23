import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { DesTimesModule } from './des-times/des-times.module';

@Module({
  imports: [PrismaModule, DesTimesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
