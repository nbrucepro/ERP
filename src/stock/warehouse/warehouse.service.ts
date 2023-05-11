import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Warehouse, WarehouseDocument } from './warehouse.model';
import { WarehouseDto } from './warehouse.dto';

@Injectable()
export class WarehouseService {
  constructor(@InjectModel("warehouses") private warehouseModel: Model<WarehouseDocument>) {}

  async create(warehouse: WarehouseDto): Promise<Warehouse> {
    const createdWarehouse = new this.warehouseModel(warehouse);
    return createdWarehouse.save();
  }

  async findAll(): Promise<Warehouse[]> {
    return this.warehouseModel.find();
  }

  async findOne(id: string): Promise<Warehouse> {
    return this.warehouseModel.findById(id);
  }

  async update(id: string, warehouse: WarehouseDto): Promise<Warehouse> {
    return this.warehouseModel.findByIdAndUpdate(id, warehouse, { new: true });
  }

  async delete(id: string): Promise<Warehouse> {
    return this.warehouseModel.findByIdAndDelete(id);
  }
}
