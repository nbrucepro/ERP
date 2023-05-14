import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProjectsDocument } from './projects.model';
import { ProjectsDto } from './projects.dto';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectModel('projects')
    private readonly projectsModel: Model<ProjectsDocument>,
  ) {}

  async create(createProjectsDto: ProjectsDto): Promise<ProjectsDto> {
    const tickets = new this.projectsModel(createProjectsDto);
    return tickets.save();
  }

  async findAll(): Promise<any> {
    let tickets = this.projectsModel.find().exec();
    return tickets;
  }

  async findOne(id: string): Promise<any> {
    return this.projectsModel.findById(id).exec();
  }

  async update(id: string, updateProjectsDto: ProjectsDto): Promise<any> {
    return this.projectsModel.findByIdAndUpdate(id, updateProjectsDto, {
      new: true,
    });
  }

  async remove(id: string): Promise<any> {
    return this.projectsModel.findByIdAndRemove(id);
  }
}
