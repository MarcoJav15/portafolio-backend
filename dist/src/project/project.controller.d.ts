import { ProjectService } from './project.service';
import { Project } from 'src/entities/project.entity';
import CreateProjectDto from 'src/dtos/create-project-dto';
export declare class ProjectController {
    private readonly projectService;
    constructor(projectService: ProjectService);
    findAll(): Promise<Project[]>;
    findOne(id: number): Promise<Project>;
    create(body: CreateProjectDto): Promise<Project>;
    update(id: number, body: any): Promise<Project>;
    destoy(id: number): Promise<Project>;
}
