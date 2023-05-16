import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AnnouncementsDocument } from './announcements.model';
import { AnnouncementsDto } from './announcements.dto';

@Injectable()
export class AnnouncementsService {
  constructor(
    @InjectModel('announcementsdb')
    private readonly announcementsModel: Model<AnnouncementsDocument>,
  ) {}

  async create(createAnnouncementsDto: AnnouncementsDto): Promise<any> {
    const announcements = new this.announcementsModel(createAnnouncementsDto);
    return announcements.save();
  }

  async findAll(): Promise<any> {
    let announcements = this.announcementsModel.find().exec();
    if (announcements === null) {
      return 'announcements not found';
    }
    return announcements;
  }

  async findOne(id: string): Promise<any> {
    const announcements = await this.announcementsModel.findById(id).exec();
    if (announcements === null) {
      return 'announcement not found';
    }
    return announcements;
  }

  async update(id: string, updateAnnouncementsdto: AnnouncementsDto): Promise<any> {
    const isIthere = await this.announcementsModel.findById(id).exec();

    if (isIthere === null) {
      return 'announcement not found';
    } else {
      const updated = this.announcementsModel.findByIdAndUpdate(
        id,
        updateAnnouncementsdto,
        {
          new: true,
        },
      );

      return updated;
    }
  }

  async remove(id: string): Promise<any> {
    const isIthere = await this.announcementsModel.findById(id).exec();

    if (isIthere === null) {
      return 'announcement not found';
    } else {
      if (await this.announcementsModel.findByIdAndRemove(id)) {
        return 'announcement deleted successfully!';
      }
    }
  }
}
