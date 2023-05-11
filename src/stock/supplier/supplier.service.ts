import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Supplier, SupplierDocument } from './supplier.schema';

@Injectable()
export class SupplierService {
  constructor(@InjectModel('suppliers') private supplierModel: Model<SupplierDocument>) {}

  async create(supplier: Supplier): Promise<Supplier> {
    const createdSupplier = new this.supplierModel(supplier);
    return createdSupplier.save();
  }

  async findAll(): Promise<Supplier[]> {
    return this.supplierModel.find();
  }

  async findOne(id: string): Promise<Supplier> {
    return this.supplierModel.findById(id);
  }

  async update(id: string, supplier: Supplier): Promise<Supplier> {
    return this.supplierModel.findByIdAndUpdate(id, supplier, { new: true });
  }

  async delete(id: string): Promise<any> {
    await this.supplierModel.findByIdAndDelete(id);
    return 'user deleted successfully'
  }
}
