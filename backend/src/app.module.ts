import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { TasteModule } from './taste/taste.module';

@Module({
  imports: [PrismaModule, TasteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
