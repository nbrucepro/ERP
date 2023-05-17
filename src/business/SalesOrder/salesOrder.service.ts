import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SalesOrderDocument } from './salesOrder.model';
import { SalesOrderDto } from './salesOrder.dto';

@Injectable()
export class SalesOrderService {
  constructor(
    @InjectModel('sales_order_tbl')
    private readonly salesOrderModel: Model<SalesOrderDocument>,
  ) {}

  async create(createSalesOrderDto: SalesOrderDto): Promise<any> {
    const salesOrder = new this.salesOrderModel(createSalesOrderDto);
    return salesOrder.save();
  }

  async findAll(): Promise<any> {
    let salesOrder = this.salesOrderModel.find().exec();
    if (salesOrder === null) {
      return 'salesOrder not found';
    }
    return salesOrder;
  }

  async findOne(id: string): Promise<any> {
    const salesOrder = await this.salesOrderModel.findById(id).exec();
    if (salesOrder === null) {
      return 'salesOrder not found';
    }
    return salesOrder;
  }

  async update(id: string, updateSalesOrderdto: SalesOrderDto): Promise<any> {
    const isIthere = await this.salesOrderModel.findById(id).exec();

    if (isIthere === null) {
      return 'salesOrder not found';
    } else {
      const updated = this.salesOrderModel.findByIdAndUpdate(
        id,
        updateSalesOrderdto,
        {
          new: true,
        },
      );

      return updated;
    }
  }

  async remove(id: string): Promise<any> {
    const isIthere = await this.salesOrderModel.findById(id).exec();

    if (isIthere === null) {
      return 'salesOrder not found';
    } else {
      if (await this.salesOrderModel.findByIdAndRemove(id)) {
        return 'salesOrder deleted successfully!';
      }
    }
  }
}
