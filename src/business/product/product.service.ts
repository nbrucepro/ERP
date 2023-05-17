import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductDocument } from './product.model';
import { ProductDto } from './product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('products_tbl')
    private readonly productModel: Model<ProductDocument>,
  ) {}

  async create(createProductDto: ProductDto): Promise<any> {
    const product = new this.productModel(createProductDto);
    return product.save();
  }

  async findAll(): Promise<any> {
    let product = this.productModel.find().exec();
    if (product === null) {
      return 'product not found';
    }
    return product;
  }

  async findOne(id: string): Promise<any> {
    const product = await this.productModel.findById(id).exec();
    if (product === null) {
      return 'product not found';
    }
    return product;
  }

  async update(id: string, updateProductdto: ProductDto): Promise<any> {
    const isIthere = await this.productModel.findById(id).exec();

    if (isIthere === null) {
      return 'product not found';
    } else {
      const updated = this.productModel.findByIdAndUpdate(
        id,
        updateProductdto,
        {
          new: true,
        },
      );

      return updated;
    }
  }

  async remove(id: string): Promise<any> {
    const isIthere = await this.productModel.findById(id).exec();

    if (isIthere === null) {
      return 'product not found';
    } else {
      if (await this.productModel.findByIdAndRemove(id)) {
        return 'product deleted successfully!';
      }
    }
  }
}
