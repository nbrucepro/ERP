import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AssignStockDocument } from './assignStock.model';
import { AssignStockDto } from './assignStock.dto';

@Injectable()
export class AssignStockService {
  constructor(
    @InjectModel('assign_stockdb')
    private readonly assignStockModel: Model<AssignStockDocument>,
  ) {}

  async create(createAssignStockDto: AssignStockDto): Promise<AssignStockDto> {
    const stock = new this.assignStockModel(createAssignStockDto);
    return stock.save();
  }

  async findAll(): Promise<any> {
    let stock = await this.assignStockModel.find();
    return stock;
    }

  async findOne(id: string): Promise<any> {
    return this.assignStockModel.findById(id).exec();
  }

  async update(id: string, updateStockdto: AssignStockDto): Promise<any> {
    return this.assignStockModel.findByIdAndUpdate(id, updateStockdto, {
      new: true,
    });
  }

  async remove(id: string): Promise<any> {
    return this.assignStockModel.findByIdAndRemove(id);
  }
}
