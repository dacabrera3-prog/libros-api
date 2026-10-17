import {
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Delete,
  Param,
  Body,
  Query,
  Res,
  HttpCode,
  HttpStatus,
  ParseIntPipe,
} from '@nestjs/common';
import { LibrosService } from './libros.service.js';
import type { Response } from 'express';

@Controller('libros')
export class LibrosController {
  constructor(private readonly librosService: LibrosService) {}

  // GET /libros?autor=... — lista la colección con filtro opcional
  @Get()
  listar(@Query('autor') autor?: string) {
    return this.librosService.listar(autor);
  }

  // GET /libros/:id — obtiene un libro por id
  @Get(':id')
  obtener(@Param('id', ParseIntPipe) id: number) {
    return this.librosService.obtener(id);
  }

  // POST /libros — crea un libro nuevo, responde 201 con Location
  @Post()
  crear(@Body() cuerpo: any, @Res({ passthrough: true }) res: Response) {
    const nuevo = this.librosService.crear(cuerpo);
    res.setHeader('Location', `/libros/${nuevo.id}`);
    return nuevo;
  }

  // PUT /libros/:id — reemplaza el libro completo
  @Put(':id')
  reemplazar(
    @Param('id', ParseIntPipe) id: number,
    @Body() cuerpo: any,
  ) {
    return this.librosService.reemplazar(id, cuerpo);
  }

  // PATCH /libros/:id — cambia solo los campos enviados
  @Patch(':id')
  modificar(
    @Param('id', ParseIntPipe) id: number,
    @Body() cambios: any,
  ) {
    return this.librosService.modificar(id, cambios);
  }

  // DELETE /libros/:id — elimina el libro, responde 204 sin cuerpo
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  eliminar(@Param('id', ParseIntPipe) id: number) {
    this.librosService.eliminar(id);
  }
}
