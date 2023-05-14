import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Purchase, PurchaseDocument } from './purchase.model';
import { PurchaseDto } from './purchase.dto';

@Injectable()
export class PurchaseService {
  constructor(@InjectModel("purchased_itemsdb") private purchaseModel: Model<PurchaseDocument>) {}

  async create(purchase: PurchaseDto): Promise<Purchase> {
    const createdPurchase = new this.purchaseModel(purchase);
    return createdPurchase.save();
  }

  async findAll(): Promise<Purchase[]> {
    return this.purchaseModel.find();
  }

  async findOne(id: string): Promise<Purchase> {
    return this.purchaseModel.findById(id);
  }

  async update(id: string, purchase: PurchaseDto): Promise<Purchase> {
    return this.purchaseModel.findByIdAndUpdate(id, purchase, { new: true });
  }

  async delete(id: string): Promise<Purchase> {
    return this.purchaseModel.findByIdAndDelete(id);
  }
}
