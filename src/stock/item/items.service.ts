import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { StockItem, StockItemDocument } from './items.model';
import { StockItemDto } from './items.dto';

@Injectable()
export class StockItemService {
  constructor(
    @InjectModel('stockItems')
    private readonly stockItemModel: Model<StockItemDocument>,
  ) {}

  async create(createStockItemDto: StockItemDto): Promise<StockItem> {
    const createdStockItem = new this.stockItemModel(createStockItemDto);
    return createdStockItem.save();
  }

  async findAll(): Promise<StockItem[]> {
    let item = this.stockItemModel.find().exec();
    return item;
  }

  async findOne(id: string): Promise<StockItem> {
    return this.stockItemModel.findById(id).exec();
  }

  async update(
    id: string,
    updateStockItemDto: StockItemDto,
  ): Promise<StockItem> {
    return this.stockItemModel.findByIdAndUpdate(id, updateStockItemDto, {
      new: true,
    });
  }

  async remove(id: string): Promise<StockItem> {
    return this.stockItemModel.findByIdAndRemove(id);
  }
}


