import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DepartmentDocument } from './fileManager.model';
import { DepartmentDto } from './fileManager.dto';

@Injectable()
export class DepartmentService {
  constructor(
    @InjectModel('fileManager')
    private readonly departmentModel: Model<DepartmentDocument>,
  ) {}

  async create(createDepartmentDto: DepartmentDto): Promise<DepartmentDto> {
    const tickets = new this.departmentModel(createDepartmentDto);
    return tickets.save();
  }

  async findAll(): Promise<any> {
    let tickets = this.departmentModel.find().exec();
    return tickets;
  }

  async findOne(id: string): Promise<any> {
    return this.departmentModel.findById(id).exec();
  }

  async update(id: string, updateDepartmentDto: DepartmentDto): Promise<any> {
    return this.departmentModel.findByIdAndUpdate(id, updateDepartmentDto, {
      new: true,
    });
  }

  async remove(id: string): Promise<any> {
    return this.departmentModel.findByIdAndRemove(id);
  }
}
