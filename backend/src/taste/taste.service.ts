import { Injectable } from '@nestjs/common';
import { CreateTasteDto } from './dto/create-taste.dto';
import { UpdateTasteDto } from './dto/update-taste.dto';
import { PrismaService} from 'src/prisma/prisma.service';

@Injectable()
export class TasteService {
  constructor(private prisma: PrismaService){}
  create(createTasteDto: CreateTasteDto) {
    return this.prisma.taste.create({ data: createTasteDto});
  }

  findAll() {
    return this.prisma.taste.findMany();
  }

  findOne(id: number) {
    return this.prisma.taste.findUnique({where: {id} });
    ;
  }

  update(id: number, updateTasteDto: UpdateTasteDto) {
    return this.prisma.taste.update ({
      where: {id},
      data: updateTasteDto,
    });
  }

  remove(id: number) {
    return this.prisma.taste.delete({ where: {id} });
  }

}