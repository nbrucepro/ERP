import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ShippingProviderDocument } from './shippingProvider.model';
import { ShippingProviderDto } from './shippingProvider.dto';

@Injectable()
export class ShippingProviderService {
  constructor(
    @InjectModel('shipping_provider_tbl')
    private readonly shippingProviderModel: Model<ShippingProviderDocument>,
  ) {}

  async create(createShippingProviderDto: ShippingProviderDto): Promise<any> {
    const shippingProvider = new this.shippingProviderModel(createShippingProviderDto);
    return shippingProvider.save();
  }

  async findAll(): Promise<any> {
    let shippingProvider = this.shippingProviderModel.find().exec();
    if (shippingProvider === null) {
      return 'shippingProvider not found';
    }
    return shippingProvider;
  }

  async findOne(id: string): Promise<any> {
    const shippingProvider = await this.shippingProviderModel.findById(id).exec();
    if (shippingProvider === null) {
      return 'shippingProvider not found';
    }
    return shippingProvider;
  }

  async update(id: string, updateShippingProviderdto: ShippingProviderDto): Promise<any> {
    const isIthere = await this.shippingProviderModel.findById(id).exec();

    if (isIthere === null) {
      return 'shippingProvider not found';
    } else {
      const updated = this.shippingProviderModel.findByIdAndUpdate(
        id,
        updateShippingProviderdto,
        {
          new: true,
        },
      );

      return updated;
    }
  }

  async remove(id: string): Promise<any> {
    const isIthere = await this.shippingProviderModel.findById(id).exec();

    if (isIthere === null) {
      return 'shippingProvider not found';
    } else {
      if (await this.shippingProviderModel.findByIdAndRemove(id)) {
        return 'shippingProvider deleted successfully!';
      }
    }
  }
}
