import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { WarningsTypesDocument } from './warningsTypes.model';
import { WarningsTypesDto } from './warningsTypes.dto';

@Injectable()
export class WarningsTypesService {
  constructor(
    @InjectModel('warnings_typesdb')
    private readonly warningsTypesModel: Model<WarningsTypesDocument>,
  ) {}

  async create(
    createWarningsTypesDto: WarningsTypesDto,
  ): Promise<WarningsTypesDto> {
    const warningsTypes = new this.warningsTypesModel(
      createWarningsTypesDto,
    );
    return warningsTypes.save();
  }

  async findAll(): Promise<any> {
    let warningsTypes = this.warningsTypesModel.find().exec();
    if (warningsTypes === null) {
      return 'warnings types not found';
    }
    return warningsTypes;
  }

  async findOne(id: string): Promise<any> {
    const warningsTypes = this.warningsTypesModel.findById(id).exec();
    if (warningsTypes === null) {
      return 'warning type not found';
    }
    return warningsTypes;
  }

  async update(id: string,updateWarningsTypesdto: WarningsTypesDto,): Promise<any> {
    const isIthere = await this.warningsTypesModel.findById(id).exec();
    if (isIthere === null) {
      return 'warning type not found';
    } else {
      const updated = this.warningsTypesModel.findByIdAndUpdate(
        id,
        updateWarningsTypesdto,
        {
          new: true,
        },
      );
      return updated;
    }
  }

  async remove(id: string): Promise<any> {
    const isIthere = await this.warningsTypesModel.findById(id).exec();    
    if (isIthere === null) {
      return 'warnings type not found';
    } else {
      if (await this.warningsTypesModel.findByIdAndRemove(id)) {
        return 'warnings type deleted successfully!';
      }
    }
  }
}
