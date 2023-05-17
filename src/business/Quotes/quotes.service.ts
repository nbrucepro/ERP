import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { QuotesDocument } from './quotes.model';
import { QuotesDto } from './quotes.dto';

@Injectable()
export class QuotesService {
  constructor(
    @InjectModel('quotesdb')
    private readonly quotesModel: Model<QuotesDocument>,
  ) {}

  async create(createQuotesDto: QuotesDto): Promise<any> {
    const quotes = new this.quotesModel(createQuotesDto);
    return quotes.save();
  }

  async findAll(): Promise<any> {
    let quotes = this.quotesModel.find().exec();
    if (quotes === null) {
      return 'quotes not found';
    }
    return quotes;
  }

  async findOne(id: string): Promise<any> {
    const quotes = await this.quotesModel.findById(id).exec();
    if (quotes === null) {
      return 'quote not found';
    }
    return quotes;
  }

  async update(id: string, updateQuotesdto: QuotesDto): Promise<any> {
    const isIthere = await this.quotesModel.findById(id).exec();

    if (isIthere === null) {
      return 'quote not found';
    } else {
      const updated = this.quotesModel.findByIdAndUpdate(
        id,
        updateQuotesdto,
        {
          new: true,
        },
      );

      return updated;
    }
  }

  async remove(id: string): Promise<any> {
    const isIthere = await this.quotesModel.findById(id).exec();

    if (isIthere === null) {
      return 'quote not found';
    } else {
      if (await this.quotesModel.findByIdAndRemove(id)) {
        return 'quote deleted successfully!';
      }
    }
  }
}
