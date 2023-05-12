import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CategoryDocument } from './category.model';
import { CategoryDto } from './category.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel('categories')
    private readonly categoryModel: Model<CategoryDocument>,
  ) {}

  async create(createGroupDto: CategoryDto): Promise<CategoryDto> {
    const createdGroup = new this.categoryModel(createGroupDto);
    return createdGroup.save();
  }

  async findAll(): Promise<any> {
    let category = this.categoryModel.find().exec();
    return category;
  }

  async findOne(id: string): Promise<any> {
    return this.categoryModel.findById(id).exec();
  }

  async update(id: string, updateGroupdto: CategoryDto): Promise<any> {
    return this.categoryModel.findByIdAndUpdate(id, updateGroupdto, {
      new: true,
    });
  }

  async remove(id: string): Promise<any> {
    return this.categoryModel.findByIdAndRemove(id);
  }
}
