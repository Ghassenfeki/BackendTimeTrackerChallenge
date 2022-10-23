import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DesTimesService } from './des-times.service';
import { CreateDesTimeDto } from './dto/create-des-time.dto';
import { UpdateDesTimeDto } from './dto/update-des-time.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { DesTime } from './entities/des-time.entity';

@Controller('des-times')
@ApiTags('des-times')
export class DesTimesController {
  constructor(private readonly desTimesService: DesTimesService) {}

  @Post()
  @ApiCreatedResponse({ type: DesTime })
  create(@Body() createDesTimeDto: CreateDesTimeDto) {
    return this.desTimesService.create(createDesTimeDto);
  }
  @Get('drafts')
  findDrafts() {
    return this.desTimesService.findDrafts();
  }
  @Get()
  @ApiOkResponse({ type: DesTime, isArray: true })
  findAll() {
    return this.desTimesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: DesTime })
  findOne(@Param('id') id: string) {
    return this.desTimesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: DesTime })
  update(@Param('id') id: string, @Body() updateDesTimeDto: UpdateDesTimeDto) {
    return this.desTimesService.update(+id, updateDesTimeDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: DesTime })
  remove(@Param('id') id: string) {
    return this.desTimesService.remove(+id);
  }
}
