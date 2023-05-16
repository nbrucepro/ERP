import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TerminationTypesDocument } from './terminationTypes.model';
import { TerminationTypesDto } from './terminationTypes.dto';

@Injectable()
export class TerminationTypesService {
  constructor(
    @InjectModel('termination_typesdb')
    private readonly terminationTypesModel: Model<TerminationTypesDocument>,
  ) {}

  async create(
    createTerminationTypesDto: TerminationTypesDto,
  ): Promise<TerminationTypesDto> {
    const terminationTypes = new this.terminationTypesModel(
      createTerminationTypesDto,
    );
    return terminationTypes.save();
  }

  async findAll(): Promise<any> {
    let terminationTypes = this.terminationTypesModel.find().exec();
    if (terminationTypes === null) {
      return 'termination types not found';
    }
    return terminationTypes;
  }

  async findOne(id: string): Promise<any> {
    const terminationTypes = this.terminationTypesModel.findById(id).exec();
    if (terminationTypes === null) {
      return 'termination type not found';
    }
    return terminationTypes;
  }

  async update(id: string,updateTerminationTypesdto: TerminationTypesDto,): Promise<any> {
    const isIthere = await this.terminationTypesModel.findById(id).exec();
    if (isIthere === null) {
      return 'termination type not found';
    } else {
      const updated = this.terminationTypesModel.findByIdAndUpdate(
        id,
        updateTerminationTypesdto,
        {
          new: true,
        },
      );
      return updated;
    }
  }

  async remove(id: string): Promise<any> {
    const isIthere = await this.terminationTypesModel.findById(id).exec();    
    if (isIthere === null) {
      return 'termination type not found';
    } else {
      if (await this.terminationTypesModel.findByIdAndRemove(id)) {
        return 'termination type deleted successfully!';
      }
    }
  }
}
