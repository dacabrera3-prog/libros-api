export interface Libro {
    id: number;
    titulo: string;
    autor: string;
    disponible: boolean;
}
export declare class LibrosService {
    private libros;
    private siguienteId;
    private indiceDe;
    listar(autor?: string): Libro[];
    obtener(id: number): Libro;
    crear(cuerpo: Omit<Libro, 'id'>): Libro;
    reemplazar(id: number, cuerpo: Omit<Libro, 'id'>): Libro;
    modificar(id: number, cambios: Partial<Omit<Libro, 'id'>>): Libro;
    eliminar(id: number): void;
}
