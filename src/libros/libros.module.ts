import { Module } from '@nestjs/common';
import { LibrosController } from './libros.controller.js';
import { LibrosService } from './libros.service.js';

@Module({
  controllers: [LibrosController],
  providers: [LibrosService],
})
export class LibrosModule {}
