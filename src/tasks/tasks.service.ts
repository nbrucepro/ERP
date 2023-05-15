import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TasksDocument } from './tasks.model';
import { TasksDto } from './tasks.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectModel('tasksdb')
    private readonly tasksModel: Model<TasksDocument>,
  ) {}

  async create(createTasksDto: TasksDto): Promise<any> {
    const tasks = new this.tasksModel(createTasksDto);
    return tasks.save();
  }

  async findAll(): Promise<any> {
    let tasks = this.tasksModel.find().exec();
    if (tasks === null) {
      return 'tasks not found';
    }
    return tasks;
  }

  async findOne(id: string): Promise<any> {
    const task = await this.tasksModel.findById(id).exec();
    if (task === null) {
      return 'task not found';
    }
    return task;
  }

  async update(id: string, updateTasksdto: TasksDto): Promise<any> {
    const isIthere = await this.tasksModel.findById(id).exec();

    if (isIthere === null) {
      return 'task not found';
    } else {
      const updated = this.tasksModel.findByIdAndUpdate(
        id,
        updateTasksdto,
        {
          new: true,
        },
      );

      return updated;
    }
  }

  async remove(id: string): Promise<any> {
    const isIthere = await this.tasksModel.findById(id).exec();

    if (isIthere === null) {
      return 'task not found';
    } else {
      if (await this.tasksModel.findByIdAndRemove(id)) {
        return 'task deleted successfully!';
      }
    }
  }
}
