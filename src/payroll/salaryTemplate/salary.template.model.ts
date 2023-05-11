import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SalaryDocument = Salary & Document;

@Schema()
export class Salary {
  @Prop()
  salaryGrades : number;
  @Prop()
  basicSalary: number;
  @Prop()
  rateHour: number;
  @Prop()
  houseRentAllowance: number;
  @Prop()
  medicalAllowance: number;
  @Prop()
  providentFund: number;
  @Prop()
  taxDeduction: number;
}

export const SalarySchema = SchemaFactory.createForClass(Salary);
