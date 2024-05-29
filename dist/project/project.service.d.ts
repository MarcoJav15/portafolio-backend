import { Repository } from 'typeorm';
import { Project } from '../entities/project.entity';
import UpdateProjectDto from 'src/dtos/update-project-dto';
import CreateProjectDto from 'src/dtos/create-project-dto';
export declare class ProjectService {
    private projectRepository;
    constructor(projectRepository: Repository<Project>);
    findOne(id: number): Promise<Project>;
    findAll(): Promise<Project[]>;
    create(new_project: CreateProjectDto): Promise<Project>;
    update(id: number, update_project: UpdateProjectDto): Promise<Project>;
    remove(id: number): Promise<Project>;
}
