import { PartialType } from '@nestjs/swagger';
import { CreateDesTimeDto } from './create-des-time.dto';

export class UpdateDesTimeDto extends PartialType(CreateDesTimeDto) {}
