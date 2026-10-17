import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { LibrosModule } from './libros/libros.module.js';

@Module({
  imports: [LibrosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
