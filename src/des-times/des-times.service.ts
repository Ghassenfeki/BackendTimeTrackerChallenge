import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDesTimeDto } from './dto/create-des-time.dto';
import { UpdateDesTimeDto } from './dto/update-des-time.dto';

@Injectable()
export class DesTimesService {
  findDrafts() {
    return this.prisma.time.findMany({ where: {} });
  }
  constructor(private prisma: PrismaService) {}

  create(createDesTimeDto: CreateDesTimeDto) {
    return this.prisma.time.create({ data: createDesTimeDto });
  }
  findAll() {
    return this.prisma.time.findMany({ where: {} });
  }

  findOne(id: number) {
    return this.prisma.time.findUnique({ where: { id } });
  }

  update(id: number, updateDesTimeDto: UpdateDesTimeDto) {
    return this.prisma.time.update({
      where: { id },
      data: UpdateDesTimeDto,
    });
  }

  remove(id: number) {
    return this.prisma.time.delete({ where: { id } });
  }
}
