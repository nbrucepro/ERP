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
import { TrainingModule } from './Training/training.module';
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
import { OfficeAssignStockModule } from './officeAssets/assignStock/assignStock.module';
import { JobsModule } from './recruitment/jobs.module';
import { IndicatorsModule } from './performance/indicator/indicators.module';
import { AppraisalModule } from './performance/appraisal/appraisal.module';
import { LeaveModule } from './leaveManagement/leave.module';
import { FileManagerModule } from './fileManager/fileManager.module';
import { ProjectsModule } from './projects/projects.module';
import { ShiftModule } from './shiftManagement/shift/shift.module';
import { AssignShiftModule } from './shiftManagement/shiftMapping/shift.module';
import { TransferItemModule } from './stock/transferItem/transferItem.module';
import { PurchaseModule } from './stock/purchase/purchase.module';
import { ComplaintsModule } from './complaints/new/complaints.module';
import { ComplaintsTypesModule } from './complaints/types/complaintsTypes.module';
import { ContractModule } from './contract/new/contract.module';
import { ContractTypesModule } from './contract/types/contractTypes.module';
import { DealsModule } from './deals/deals.module';
import { WarningsModule } from './warnings/new/warnings.module';
import { WarningsTypesModule } from './warnings/types/warningsTypes.module';
import { TasksModule } from './tasks/tasks.module';
import { OpportunitiesModule } from './opportunities/opportunities.module';
import { ResignationModule } from './resignation/resignation.module';
import { BugsModule } from './bugs/bugs.module';
import { TerminationModule } from './termination/new/termination.module';
import { TerminationTypesModule } from './termination/types/terminationTypes.module';
import { AttendanceModule } from './attendance/mark/attendance.module';
import { TimeChangeRequestModule } from './attendance/timeChangeRequest/timeChangeRequest.module';
import { PromotionModule } from './promotion/promotion.module';
import { GoalsModule } from './utilities/goals/goals.module';
import { HolidayModule } from './utilities/holiday/holiday.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/erpdb'),
    // MongooseModule.forRoot('mongodb+srv://bruce:bruce@cluster0.exmgv.mongodb.net/erpdb'),
    AdminModule,
    UsersModule,
    ShiftModule,
    AssignShiftModule,
    ProjectsModule,
    AdminModule,

    /** The stock section */    
    ItemsModule,
    PurchaseModule,
    GrouplistModule,
    ManufacturerModule,
    SupplierModule,
    WarehouseModule,
    TransferItemModule,
    /** The stock section */

    /** The complaints section */
    ComplaintsModule,
    ComplaintsTypesModule,
    /** The complaints section */
    
    /** The contract section starts*/
    ContractModule,
    ContractTypesModule,
    /** The contract section ends*/
    
    /** The deals section starts*/
    DealsModule,
    /** The deals section ends*/
    
    /** The warnings section starts*/
    WarningsModule,
    WarningsTypesModule,
    /** The warnings section ends*/
    
    /** The tasks section starts*/
    TasksModule,  
    /** The tasks section ends*/
    
    /** The opportunites section starts*/
    OpportunitiesModule,
    /** The opportunites section ends*/
    
    /** The resignation section starts*/
    ResignationModule,
    /** The resignation section ends*/
    
    /** The bugs section starts */
    BugsModule,
    /** The bugs section ends */


    /** The termination section starts*/
    TerminationModule,
    TerminationTypesModule,

    /** The termination section ends*/

    /** The attendance section starts*/
    AttendanceModule,
    TimeChangeRequestModule,
    /** The attendance section ends */

    /** The promotion section starts */
    PromotionModule,
    /** The promotion section ends*/

    /** The utilities section starts*/
    GoalsModule,
    HolidayModule,
    /** The utilities section ends*/

    FileManagerModule,    
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
    OfficeAssignStockModule,
    JobsModule,
    IndicatorsModule,
    AppraisalModule,
    LeaveModule  
  ],
  controllers: [AppController], 
  providers: [AppService],
})
export class AppModule {  
}  