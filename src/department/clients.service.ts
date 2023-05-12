import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ClientsDocument } from './clients.model';
import { ClientsDto } from './clients.dto';

@Injectable()
export class ClientsService {
  constructor(
    @InjectModel('clients')
    private readonly clientsModel: Model<ClientsDocument>,
  ) {}

  async create(createClientsDto: ClientsDto): Promise<ClientsDto> {
    const tickets = new this.clientsModel(createClientsDto);
    return tickets.save();
  }

  async findAll(): Promise<any> {
    let tickets = this.clientsModel.find().exec();
    return tickets;
  }

  async findOne(id: string): Promise<any> {
    return this.clientsModel.findById(id).exec();
  }

  async update(id: string, updateClientsDto: ClientsDto): Promise<any> {
    return this.clientsModel.findByIdAndUpdate(id, updateClientsDto, {
      new: true,
    });
  }

  async remove(id: string): Promise<any> {
    return this.clientsModel.findByIdAndRemove(id);
  }
}
