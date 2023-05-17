import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { InvoiceDocument } from './invoice.model';
import { BusinessInvoiceDto } from './invoice.dto';

@Injectable()
export class BusinessInvoiceService {
  constructor(
    @InjectModel('invoice_tbl')
    private readonly invoiceModel: Model<InvoiceDocument>,
  ) {}

  async create(createInvoiceDto: BusinessInvoiceDto): Promise<any> {
    const invoice = new this.invoiceModel(createInvoiceDto);
    return invoice.save();
  }

  async findAll(): Promise<any> {
    let invoice = this.invoiceModel.find().exec();
    if (invoice === null) {
      return 'invoice not found';
    }
    return invoice;
  }

  async findOne(id: string): Promise<any> {
    const invoice = await this.invoiceModel.findById(id).exec();
    if (invoice === null) {
      return 'invoice not found';
    }
    return invoice;
  }

  async update(id: string, updateInvoicedto: BusinessInvoiceDto): Promise<any> {
    const isIthere = await this.invoiceModel.findById(id).exec();

    if (isIthere === null) {
      return 'invoice not found';
    } else {
      const updated = this.invoiceModel.findByIdAndUpdate(
        id,
        updateInvoicedto,
        {
          new: true,
        },
      );

      return updated;
    }
  }

  async remove(id: string): Promise<any> {
    const isIthere = await this.invoiceModel.findById(id).exec();

    if (isIthere === null) {
      return 'invoice not found';
    } else {
      if (await this.invoiceModel.findByIdAndRemove(id)) {
        return 'invoice deleted successfully!';
      }
    }
  }
}
