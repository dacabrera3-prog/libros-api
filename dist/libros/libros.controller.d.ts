import { LibrosService } from './libros.service.js';
import type { Response } from 'express';
export declare class LibrosController {
    private readonly librosService;
    constructor(librosService: LibrosService);
    listar(autor?: string): import("./libros.service.js").Libro[];
    obtener(id: number): import("./libros.service.js").Libro;
    crear(cuerpo: any, res: Response): import("./libros.service.js").Libro;
    reemplazar(id: number, cuerpo: any): import("./libros.service.js").Libro;
    modificar(id: number, cambios: any): import("./libros.service.js").Libro;
    eliminar(id: number): void;
}
