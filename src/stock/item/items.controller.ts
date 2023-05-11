import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('api/items')
@ApiTags('Stock')
export class ItemsController {
    @Get('/')
    tst(){
        return 'This is item controller...'
    }
}
