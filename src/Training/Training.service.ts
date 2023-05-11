import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TrainingDocument } from './training.model';
import { TrainingDto } from './training.dto';

@Injectable()
export class TrainingService {
  constructor(
    @InjectModel('trainings')
    private readonly trainingModel: Model<TrainingDocument>,
  ) {}

  async create(createTrainingDto: TrainingDto): Promise<TrainingDto> {
    const training = new this.trainingModel(createTrainingDto);
    return training.save();
  }

  async findAll(): Promise<any> {
    let training = this.trainingModel.find().exec();
    return training;
  }

  async findOne(id: string): Promise<any> {
    return this.trainingModel.findById(id).exec();
  }

  async update(id: string, updateTrainingdto: TrainingDto): Promise<any> {
    return this.trainingModel.findByIdAndUpdate(id, updateTrainingdto, {
      new: true,
    });
  }

  async remove(id: string): Promise<any> {
    return this.trainingModel.findByIdAndRemove(id);
  }
}
