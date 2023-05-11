import { Module } from '@nestjs/common';
import { SupplierController } from './supplier.controller';
import { SupplierService } from './supplier.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SupplierSchema } from './supplier.schema';
@Module({
    imports: [MongooseModule.forFeatureAsync([{ name: 'suppliers', useFactory:()=>{
        const schema = SupplierSchema;
        schema.pre('save',function () {
          console.log('Hello from ERP pre save')
        })
        return schema;
      } }])],
  providers: [SupplierService],
  controllers: [SupplierController], 
})
export class SupplierModule {}
