import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TaxDocument } from './tax.model';
import { TaxDto } from './tax.dto';

@Injectable()
export class TaxService {
  constructor(
    @InjectModel('taxes_tbl')
    private readonly taxModel: Model<TaxDocument>,
  ) {}

  async create(createTaxDto: TaxDto): Promise<any> {
    const tax = new this.taxModel(createTaxDto);
    return tax.save();
  }

  async findAll(): Promise<any> {
    let tax = this.taxModel.find().exec();
    if (tax === null) {
      return 'taxRate not found';
    }
    return tax;
  }

  async findOne(id: string): Promise<any> {
    const tax = await this.taxModel.findById(id).exec();
    if (tax === null) {
      return 'taxRate not found';
    }
    return tax;
  }

  async update(id: string, updateTaxdto: TaxDto): Promise<any> {
    const isIthere = await this.taxModel.findById(id).exec();

    if (isIthere === null) {
      return 'taxRate not found';
    } else {
      const updated = this.taxModel.findByIdAndUpdate(
        id,
        updateTaxdto,
        {
          new: true,
        },
      );

      return updated;
    }
  }

  async remove(id: string): Promise<any> {
    const isIthere = await this.taxModel.findById(id).exec();

    if (isIthere === null) {
      return 'taxRate not found';
    } else {
      if (await this.taxModel.findByIdAndRemove(id)) {
        return 'tax deleted successfully!';
      }
    }
  }
}
