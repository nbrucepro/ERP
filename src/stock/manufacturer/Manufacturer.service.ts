import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ManufacturerDocument } from './manufacturer.model';
import { ManufacturerDto } from './manufacturer.dto';
@Injectable()
export class ManufacturerService {
  constructor(
    @InjectModel('manufacturers')
    private readonly manufacturerModel: Model<ManufacturerDocument>,
  ) {}

  async create(createGroupDto: ManufacturerDto): Promise<ManufacturerDto> {
    const createdGroup = new this.manufacturerModel(createGroupDto);
    return createdGroup.save();
  }

  async findAll(): Promise<any> {
    let manufacturer = this.manufacturerModel.find().exec();
    return manufacturer;
  }

  async findOne(id: string): Promise<any> {
    return this.manufacturerModel.findById(id).exec();
  }

  async update(id: string, updateGroupdto: ManufacturerDto): Promise<any> {
    return this.manufacturerModel.findByIdAndUpdate(id, updateGroupdto, {
      new: true,
    });
  }

  async remove(id: string): Promise<any> {
    return this.manufacturerModel.findByIdAndRemove(id);
  }
}
