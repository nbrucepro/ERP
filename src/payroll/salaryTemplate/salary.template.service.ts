import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SalaryDocument } from './salary.template.model';
import { SalaryDto } from './salary.template.dto';

@Injectable()
export class SalaryService {
  constructor(
    @InjectModel('salary')
    private readonly salaryModel: Model<SalaryDocument>,
  ) {}

  async create(createSalaryDto: SalaryDto): Promise<SalaryDto> {
    const createdSalary = new this.salaryModel(createSalaryDto);
    return createdSalary.save();
  }

  async findAll(): Promise<any> {
    let salary = this.salaryModel.find().exec();
    return salary;
  }

  async findOne(id: string): Promise<any> {
    return this.salaryModel.findById(id).exec();
  }

  async update(id: string, updateSalarydto: SalaryDto): Promise<any> {
    return this.salaryModel.findByIdAndUpdate(id, updateSalarydto, {
      new: true,
    });
  }

  async remove(id: string): Promise<any> {
    return this.salaryModel.findByIdAndRemove(id);
  }
}
