import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ContractDocument } from './contract.model';
import { ContractDto } from './contract.dto';

@Injectable()
export class ContractService {
  constructor(
    @InjectModel('contractsdb')
    private readonly contractModel: Model<ContractDocument>,
  ) {}

  async create(createContractDto: ContractDto): Promise<any> {
    const contract = new this.contractModel(createContractDto);
    return contract.save();
  }

  async findAll(): Promise<any> {
    let contract = this.contractModel.find().exec();
    if (contract === null){
      return "contract not found"
    }
    return contract;
  }

  async findOne(id: string): Promise<any> {
    const contract = await this.contractModel.findById(id).exec();
    if ( contract === null) {
      return 'contract not found';
    }
    return contract;
  }

  async update(id: string, updateContractdto: ContractDto): Promise<any> {
    const updated = this.contractModel.findByIdAndUpdate(
      id,
      updateContractdto,
      {
        new: true,
      },
    );
    if (updated == null) {
      return 'contract not found';
    }
    return updated;
  }

  async remove(id: string): Promise<any> {
    return this.contractModel.findByIdAndRemove(id);
  }
}
