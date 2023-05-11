import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Invoice, InvoiceDocument } from './invoice.model';
import { InvoiceDto } from './invoice.dto';

@Injectable()
export class InvoiceService {
  constructor(
    @InjectModel('invoice')
    private readonly invoiceModel: Model<InvoiceDocument>,
  ) {}

  async create(createInvoiceDto: InvoiceDto): Promise<Invoice> {
    const createdInvoice = new this.invoiceModel(createInvoiceDto);
    return createdInvoice.save();
  }

  async findAll(): Promise<Invoice[]> {
    let item = this.invoiceModel.find().exec();
    return item;
  }

  async findOne(id: string): Promise<Invoice> {
    return this.invoiceModel.findById(id).exec();
  }

  async update(
    id: string,
    updateInvoiceDto: InvoiceDto,
  ): Promise<Invoice> {
    return this.invoiceModel.findByIdAndUpdate(id, updateInvoiceDto, {
      new: true,
    });
  }

  async remove(id: string): Promise<Invoice> {
    return this.invoiceModel.findByIdAndRemove(id);
  }
}


