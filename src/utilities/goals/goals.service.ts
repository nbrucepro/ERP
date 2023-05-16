import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GoalsDocument } from './goals.model';
import { GoalsDto } from './goals.dto';

@Injectable()
export class GoalsService {
  constructor(
    @InjectModel('goalsdb')
    private readonly goalsModel: Model<GoalsDocument>,
  ) {}

  async create(createGoalsDto: GoalsDto): Promise<any> {
    const goals = new this.goalsModel(createGoalsDto);
    return goals.save();
  }

  async findAll(): Promise<any> {
    let goals = this.goalsModel.find().exec();
    if (goals === null) {
      return 'goals not found';
    }
    return goals;
  }

  async findOne(id: string): Promise<any> {
    const goals = await this.goalsModel.findById(id).exec();
    if (goals === null) {
      return 'goal not found';
    }
    return goals;
  }

  async update(id: string, updateGoalsdto: GoalsDto): Promise<any> {
    const isIthere = await this.goalsModel.findById(id).exec();

    if (isIthere === null) {
      return 'goal not found';
    } else {
      const updated = this.goalsModel.findByIdAndUpdate(
        id,
        updateGoalsdto,
        {
          new: true,
        },
      );

      return updated;
    }
  }

  async remove(id: string): Promise<any> {
    const isIthere = await this.goalsModel.findById(id).exec();

    if (isIthere === null) {
      return 'goal not found';
    } else {
      if (await this.goalsModel.findByIdAndRemove(id)) {
        return 'goal deleted successfully!';
      }
    }
  }
}
