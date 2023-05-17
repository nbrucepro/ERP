import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ContactDocument } from './contact.model';
import { ContactDto } from './contact.dto';

@Injectable()
export class ContactService {
  constructor(
    @InjectModel('contact_tbl')
    private readonly contactModel: Model<ContactDocument>,
  ) {}

  async create(createContactDto: ContactDto): Promise<any> {
    const contact = new this.contactModel(createContactDto);
    return contact.save();
  }

  async findAll(): Promise<any> {
    let contact = this.contactModel.find().exec();
    if (contact === null) {
      return 'contact not found';
    }
    return contact;
  }

  async findOne(id: string): Promise<any> {
    const contact = await this.contactModel.findById(id).exec();
    if (contact === null) {
      return 'contact not found';
    }
    return contact;
  }

  async update(id: string, updateContactdto: ContactDto): Promise<any> {
    const isIthere = await this.contactModel.findById(id).exec();

    if (isIthere === null) {
      return 'contact not found';
    } else {
      const updated = this.contactModel.findByIdAndUpdate(
        id,
        updateContactdto,
        {
          new: true,
        },
      );

      return updated;
    }
  }

  async remove(id: string): Promise<any> {
    const isIthere = await this.contactModel.findById(id).exec();

    if (isIthere === null) {
      return 'contact not found';
    } else {
      if (await this.contactModel.findByIdAndRemove(id)) {
        return 'contact deleted successfully!';
      }
    }
  }
}
