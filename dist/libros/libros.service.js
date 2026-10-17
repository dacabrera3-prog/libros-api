var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable, NotFoundException } from '@nestjs/common';
let LibrosService = class LibrosService {
    libros = [
        { id: 1, titulo: 'Cien años de soledad', autor: 'García Márquez', disponible: true },
        { id: 2, titulo: 'El túnel', autor: 'Sabato', disponible: true },
        { id: 3, titulo: 'Rayuela', autor: 'Cortázar', disponible: false },
    ];
    siguienteId = 4;
    indiceDe(id) {
        const idx = this.libros.findIndex((l) => l.id === id);
        if (idx === -1)
            throw new NotFoundException(`No existe el libro ${id}`);
        return idx;
    }
    listar(autor) {
        if (autor) {
            return this.libros.filter((l) => l.autor.toLowerCase().includes(autor.toLowerCase()));
        }
        return this.libros;
    }
    obtener(id) {
        return this.libros[this.indiceDe(id)];
    }
    crear(cuerpo) {
        const nuevo = { id: this.siguienteId++, ...cuerpo };
        this.libros.push(nuevo);
        return nuevo;
    }
    reemplazar(id, cuerpo) {
        const idx = this.indiceDe(id);
        this.libros[idx] = { id, ...cuerpo };
        return this.libros[idx];
    }
    modificar(id, cambios) {
        const idx = this.indiceDe(id);
        this.libros[idx] = { ...this.libros[idx], ...cambios };
        return this.libros[idx];
    }
    eliminar(id) {
        const idx = this.indiceDe(id);
        this.libros.splice(idx, 1);
    }
};
LibrosService = __decorate([
    Injectable()
], LibrosService);
export { LibrosService };
//# sourceMappingURL=libros.service.js.map