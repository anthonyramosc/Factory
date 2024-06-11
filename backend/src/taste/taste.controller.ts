import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TasteService } from './taste.service';
import { CreateTasteDto } from './dto/create-taste.dto';
import { UpdateTasteDto } from './dto/update-taste.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('taste')
@ApiTags ('taste')
export class TasteController {
  constructor(private readonly tasteService: TasteService) {}

  @Post()
  create(@Body() createTasteDto: CreateTasteDto) {
    return this.tasteService.create(createTasteDto);
  }
  @Get()
  findAll(){
    return this.tasteService.findAll();
  }

  @Get (':id')
  findOne(@Param('id') id: string) {
    return this.tasteService.findOne(+id);
  }
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() UpdateTasteDto: UpdateTasteDto,
  ) {
    return this.tasteService.update(+id, UpdateTasteDto);
  }
  @Delete(':id')
  remove(@Param('id') id: string){
    return this.tasteService.remove(+id);
  }

}