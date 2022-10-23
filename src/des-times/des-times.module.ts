import { Module } from '@nestjs/common';
import { DesTimesService } from './des-times.service';
import { DesTimesController } from './des-times.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [DesTimesController],
  providers: [DesTimesService],
  imports: [PrismaModule],
})
export class DesTimesModule {}
