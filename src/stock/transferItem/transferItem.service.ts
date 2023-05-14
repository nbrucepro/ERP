import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TransferItem, TransferItemDocument } from './transferItem.model';
import { TransferItemDto } from './transferItem.dto';

@Injectable()
export class TransferItemService {
  constructor(@InjectModel("transfered_itemsdb") private transferItemModel: Model<TransferItemDocument>) {}

  async create(transferItem: TransferItemDto): Promise<TransferItem> {
    const createdTransferItem = new this.transferItemModel(transferItem);
    return createdTransferItem.save();
  }

  async findAll(): Promise<TransferItem[]> {
    return this.transferItemModel.find();
  }

  async findOne(id: string): Promise<TransferItem> {
    return this.transferItemModel.findById(id);
  }

  async update(id: string, transferItem: TransferItemDto): Promise<TransferItem> {
    return this.transferItemModel.findByIdAndUpdate(id, transferItem, { new: true });
  }

  async delete(id: string): Promise<TransferItem> {
    return this.transferItemModel.findByIdAndDelete(id);
  }
}
