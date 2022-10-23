import { time } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class DesTime implements time {
  time_deb: string;
  time_fin: string;
  chrono: string;
  @ApiProperty()
  id: number;

  @ApiProperty()
  nom_period: string;

  @ApiProperty({ required: false, nullable: true })
  temps_deb: string;

  @ApiProperty()
  temps_fin: string;

  @ApiProperty()
  date: Date;
}
