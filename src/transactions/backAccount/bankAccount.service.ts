import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BankAccountDocument } from './bankAccount.model';
import { BankAccountDto } from './bankAccount.dto';

@Injectable()
export class BankAccountService {
  constructor(
    @InjectModel('bankAccount')
    private readonly bankAccountModel: Model<BankAccountDocument>,
  ) {}

  async create(createBankAccountDto: BankAccountDto): Promise<BankAccountDto> {
    const bankAccount = new this.bankAccountModel(createBankAccountDto);
    return bankAccount.save();
  }

  async findAll(): Promise<any> {
    let bankAccounts = this.bankAccountModel.find().exec();
    return bankAccounts;
  }

  async findOne(id: string): Promise<any> {
    return this.bankAccountModel.findById(id).exec();
  }

  async update(id: string, updateBankAccountdto: BankAccountDto): Promise<any> {
    return this.bankAccountModel.findByIdAndUpdate(id, updateBankAccountdto, {
      new: true,
    });
  }

  async remove(id: string): Promise<any> {
    return this.bankAccountModel.findByIdAndRemove(id);
  }
}
