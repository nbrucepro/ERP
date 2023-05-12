import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CategoryDocument } from './category.model';
import { CategoryDto } from './category.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel('office_assets_category')
    private readonly categoryModel: Model<CategoryDocument>,
  ) {}

  async create(createCategoryDto: CategoryDto): Promise<CategoryDto> {
    const category = new this.categoryModel(createCategoryDto);
    return category.save();
  }

  async findAll(): Promise<any> {
    let category = this.categoryModel.find().exec();
    return category;
  }

  async findOne(id: string): Promise<any> {
    return this.categoryModel.findById(id).exec();
  }

  async update(id: string, updateCategorydto: CategoryDto): Promise<any> {
    return this.categoryModel.findByIdAndUpdate(id, updateCategorydto, {
      new: true,
    });
  }

  async remove(id: string): Promise<any> {
    return this.categoryModel.findByIdAndRemove(id);
  }
}
