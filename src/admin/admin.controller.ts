import { Controller, Post, Get } from '@nestjs/common';
import {
  ApiAcceptedResponse,
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AdminService } from './admin.service';

@ApiTags('Admin')
@Controller('admin')
export class AdminController {
  constructor(private AdminService: AdminService) {}
  @Get('/')
  @ApiCreatedResponse({ description: 'created admin successfully' })
  @ApiBadRequestResponse({ description: 'admin can not register. Try again!' })
  getAll(): string {
    return 'Hello ad';
  }
}
