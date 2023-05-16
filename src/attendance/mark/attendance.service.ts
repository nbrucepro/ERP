import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AttendanceDocument } from './attendance.model';
import { AttendanceDto } from './attendance.dto';

@Injectable()
export class AttendanceService {
  constructor(
    @InjectModel('attendancedb')
    private readonly attendanceModel: Model<AttendanceDocument>,
  ) {}

  async create(createAttendanceDto: AttendanceDto): Promise<any> {
    const attendance = new this.attendanceModel(createAttendanceDto);
    return attendance.save();
  }

  async findAll(): Promise<any> {
    let attendance = this.attendanceModel.find().exec();
    if (attendance === null) {
      return 'attendance not found';
    }
    return attendance;
  }

  async findOne(id: string): Promise<any> {
    const attendance = await this.attendanceModel.findById(id).exec();
    if (attendance === null) {
      return 'attendance not found';
    }
    return attendance;
  }

  async update(id: string, updateAttendancedto: AttendanceDto): Promise<any> {
    const isIthere = await this.attendanceModel.findById(id).exec();

    if (isIthere === null) {
      return 'attendance not found';
    } else {
      const updated = this.attendanceModel.findByIdAndUpdate(
        id,
        updateAttendancedto,
        {
          new: true,
        },
      );

      return updated;
    }
  }

  async remove(id: string): Promise<any> {
    const isIthere = await this.attendanceModel.findById(id).exec();

    if (isIthere === null) {
      return 'attendance not found';
    } else {
      if (await this.attendanceModel.findByIdAndRemove(id)) {
        return 'attendance deleted successfully!';
      }
    }
  }
}
