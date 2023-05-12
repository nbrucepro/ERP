import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ArticlesDocument } from './articles.model';
import { ArticlesDto } from './articles.dto';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectModel('articles')
    private readonly articlesModel: Model<ArticlesDocument>,
  ) {}

  async create(createArticlesDto: ArticlesDto): Promise<ArticlesDto> {
    const createdArticles = new this.articlesModel(createArticlesDto);
    return createdArticles.save();
  }

  async findAll(): Promise<any> {
    let articles = this.articlesModel.find().exec();
    return articles;
  }

  async findOne(id: string): Promise<any> {
    return this.articlesModel.findById(id).exec();
  }

  async update(id: string, updateGroupdto: ArticlesDto): Promise<any> {
    return this.articlesModel.findByIdAndUpdate(id, updateGroupdto, {
      new: true,
    });
  }

  async remove(id: string): Promise<any> {
    return this.articlesModel.findByIdAndRemove(id);
  }
}
