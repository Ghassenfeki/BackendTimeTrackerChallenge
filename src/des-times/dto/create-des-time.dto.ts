import { ApiProperty } from '@nestjs/swagger';

export class CreateDesTimeDto {
  @ApiProperty()
  nom_period: string;
  @ApiProperty()
  time_deb: string;

  @ApiProperty()
  time_fin: string;

  @ApiProperty()
  chrono: string;
}
