import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { MongooseModule } from '@nestjs/mongoose';
import UsersModule from './users/users.module';
import { ItemsModule } from './stock/item/items.module';
import { SupplierModule } from './stock/supplier/supplier.module';
import { WarehouseModule } from './stock/warehouse/warehouse.module';
import { GrouplistModule } from './stock/grouplist/grouplist.module';
import { ManufacturerModule } from './stock/manufacturer/manufacturer.module';
import { SalaryModule } from './payroll/salaryTemplate/salary.template.module';
import { HourlyModule } from './payroll/hourlyTemplate/hourly.template.module';
import { TrainingModule } from './training/training.module';
import { LeadsModule } from './leads/leads.module';
import { InvoiceModule } from './sales/Invoice/invoice.module';
import { TicketsModule } from './tickets/tickets.module';
import { CategoryModule } from './knowledgeBase/category/category.module';
import { ArticlesModule } from './knowledgeBase/articles/articles.module';
import { BankAccountModule } from './transactions/backAccount/bankAccount.module';
import { ClientsModule } from './clients/clients.module';
import { DepartmentModule } from './department/department.module';
import { OfficeCategoryModule } from './officeAssets/category/leads.module';
import { OfficeStockModule } from './officeAssets/stock/stock.module';
@Module({
  imports: [
    AdminModule,
    UsersModule,
    AdminModule,
    MongooseModule.forRoot('mongodb://localhost/erpdb'),
    // MongooseModule.forRoot('mongodb+srv://bruce:bruce@cluster0.exmgv.mongodb.net/erpdb'),
    ItemsModule,
    GrouplistModule,
    ManufacturerModule,
    SupplierModule,
    WarehouseModule,
    SalaryModule,
    HourlyModule,
    TrainingModule,
    LeadsModule,
    InvoiceModule,
    TicketsModule,
    ArticlesModule,
    CategoryModule,
    BankAccountModule,
    ClientsModule,
    DepartmentModule,
    OfficeCategoryModule,
    OfficeStockModule,    
  ],
  controllers: [AppController], 
  providers: [AppService],
})
export class AppModule {  
}  
