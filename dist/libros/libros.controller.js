var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Controller, Get, Post, Put, Patch, Delete, Param, Body, Query, Res, HttpCode, HttpStatus, ParseIntPipe, } from '@nestjs/common';
import { LibrosService } from './libros.service.js';
let LibrosController = class LibrosController {
    librosService;
    constructor(librosService) {
        this.librosService = librosService;
    }
    listar(autor) {
        return this.librosService.listar(autor);
    }
    obtener(id) {
        return this.librosService.obtener(id);
    }
    crear(cuerpo, res) {
        const nuevo = this.librosService.crear(cuerpo);
        res.setHeader('Location', `/libros/${nuevo.id}`);
        return nuevo;
    }
    reemplazar(id, cuerpo) {
        return this.librosService.reemplazar(id, cuerpo);
    }
    modificar(id, cambios) {
        return this.librosService.modificar(id, cambios);
    }
    eliminar(id) {
        this.librosService.eliminar(id);
    }
};
__decorate([
    Get(),
    __param(0, Query('autor')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LibrosController.prototype, "listar", null);
__decorate([
    Get(':id'),
    __param(0, Param('id', ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], LibrosController.prototype, "obtener", null);
__decorate([
    Post(),
    __param(0, Body()),
    __param(1, Res({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], LibrosController.prototype, "crear", null);
__decorate([
    Put(':id'),
    __param(0, Param('id', ParseIntPipe)),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], LibrosController.prototype, "reemplazar", null);
__decorate([
    Patch(':id'),
    __param(0, Param('id', ParseIntPipe)),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], LibrosController.prototype, "modificar", null);
__decorate([
    Delete(':id'),
    HttpCode(HttpStatus.NO_CONTENT),
    __param(0, Param('id', ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], LibrosController.prototype, "eliminar", null);
LibrosController = __decorate([
    Controller('libros'),
    __metadata("design:paramtypes", [LibrosService])
], LibrosController);
export { LibrosController };
//# sourceMappingURL=libros.controller.js.map