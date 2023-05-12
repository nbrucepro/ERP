import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TicketsDocument } from './tickets.model';
import { TicketsDto } from './tickets.dto';

@Injectable()
export class TicketsService {
  constructor(
    @InjectModel('tickets')
    private readonly ticketsModel: Model<TicketsDocument>,
  ) {}

  async create(createTicketsDto: TicketsDto): Promise<TicketsDto> {
    const tickets = new this.ticketsModel(createTicketsDto);
    return tickets.save();
  }

  async findAll(): Promise<any> {
    let tickets = this.ticketsModel.find().exec();
    return tickets;
  }

  async findOne(id: string): Promise<any> {
    return this.ticketsModel.findById(id).exec();
  }

  async update(id: string, updateTicketsdto: TicketsDto): Promise<any> {
    return this.ticketsModel.findByIdAndUpdate(id, updateTicketsdto, {
      new: true,
    });
  }

  async remove(id: string): Promise<any> {
    return this.ticketsModel.findByIdAndRemove(id);
  }
}
