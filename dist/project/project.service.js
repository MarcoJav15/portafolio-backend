"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const project_entity_1 = require("../entities/project.entity");
const typeorm_2 = require("@nestjs/typeorm");
let ProjectService = class ProjectService {
    constructor(projectRepository) {
        this.projectRepository = projectRepository;
    }
    async findOne(id) {
        const record = await this.projectRepository.findOne({
            where: { id },
        });
        if (record === null) {
            throw new common_1.NotFoundException('User #${id} not found');
        }
        return record;
    }
    findAll() {
        return this.projectRepository.find();
    }
    create(new_project) {
        const project = this.projectRepository.create(new_project);
        return this.projectRepository.save(project);
    }
    async update(id, update_project) {
        const project = await this.findOne(id);
        this.projectRepository.merge(project, update_project);
        return this.projectRepository.save(project);
    }
    async remove(id) {
        const project = await this.findOne(id);
        return this.projectRepository.remove(project);
    }
};
exports.ProjectService = ProjectService;
exports.ProjectService = ProjectService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(project_entity_1.Project)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], ProjectService);
//# sourceMappingURL=project.service.js.map