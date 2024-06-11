import { Module } from '@nestjs/common';
import { TasteService } from './taste.service';
import { TasteController } from './taste.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [TasteController],
  providers: [TasteService],
  imports: [PrismaModule]
})
export class TasteModule {}
