import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ContractTypesDocument } from './contractTypes.model';
import { ContractTypesDto } from './contractTypes.dto';

@Injectable()
export class ContractTypesService {
  constructor(
    @InjectModel('contract_typesdb')
    private readonly contractTypesModel: Model<ContractTypesDocument>,
  ) {}

  async create(createContractTypesDto: ContractTypesDto): Promise<ContractTypesDto> {
    const contractTypes = new this.contractTypesModel(createContractTypesDto);
    return contractTypes.save();
  }

  async findAll(): Promise<any> {
    let contractTypes = this.contractTypesModel.find().exec();
    return contractTypes;
  }

  async findOne(id: string): Promise<any> {
    return this.contractTypesModel.findById(id).exec();
  }

  async update(id: string, updateContractTypesdto: ContractTypesDto): Promise<any> {
    return this.contractTypesModel.findByIdAndUpdate(id, updateContractTypesdto, {
      new: true,
    });
  }

  async remove(id: string): Promise<any> {
    return this.contractTypesModel.findByIdAndRemove(id);
  }
}
